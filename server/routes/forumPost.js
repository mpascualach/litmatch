const express = require('express');
const passport = require('passport');
const path = require('path');
const Post = require('../models/Post');
const bcrypt = require('bcrypt');
const debug = require('debug')("angularauth:" + path.basename(__filename).split('.')[0]);
const User = require ('../models/User')
var postRoutes = express.Router();

postRoutes.get('/list', (req, res, next) => {
  Post.find().populate("creator")
    .then(list => {
      res.json(list);
    })
    .reject(err => {
      res.status(500).json(err)
    });
})

postRoutes.get('/listbyId', (req,res,next)=>{
  console.log("entroo")
  console.log(req.user);
  Post.find({creator: req.user._id})
  .then(posts => res.status(200).json(posts))
})

postRoutes.get('/:id', (req, res, next) => {
  Post.findById(req.params.id)
    .then(singlePost => {
      res.json(singlePost);
    })
    .reject(err => {
      res.status(500).json(err)
    });
})

postRoutes.post('/makepost', (req, res, next) => {
  console.log(req.body);
  let newPost = new Post({
    creator: req.body.user,
    title: req.body.title,
    content: req.body.content,
  });
  req.body.user.posts.push(newPost);
  newPost.save((err) => {
    if (err) {
      res.status(400).json({
        message: "Something went wrong"
      });
    } else {
      req.login(newPost, function(err) {
        if (err) {
          return res.status(500).json({
            message: 'something went wrong :('
          });
        }
        res.status(200).json(newPost);
      });
    }
  });
});

postRoutes.put("/edit/:id", (req, res, next) => {
  const updates = {
    title: req.body.title,
    content: req.body.content
  };
  console.log(updates)
  Post.findByIdAndUpdate(req.params.id, updates, (err) => {
    if (err) {
      return res.status(400).json({
        message: "Unable to update Post",
        err
      });
    }
    res.json({
      message: 'Post updated successfully'
    });
  });
});

postRoutes.get("/delete/:id", (req, res) => {
  let postId = req.params.id;
  Post.deleteOne({
      _id: postId
    }).then(message => {
      return res.status(200).json(message);
    })
    .catch(err => res.status(500).json(err));
});

module.exports = postRoutes;
