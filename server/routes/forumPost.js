const express = require('express');
const passport = require('passport');
const path = require('path');
const Post = require('../models/Post');
const bcrypt = require('bcrypt');
const debug = require('debug')("angularauth:" + path.basename(__filename).split('.')[0]);
const User = require ('../models/User')
const Comment = require('../models/Comment')
var postRoutes = express.Router();

postRoutes.get('/list', (req, res, next) => {
  Post.find().sort('-created_at')
  .populate("creator")
    .then(list => {
      res.json(list);
    })
    .reject(err => {
      res.status(500).json(err)
    });
})

postRoutes.get('/listbyId/:id', (req,res)=>{
  Post.find({creator: req.params.id}).sort('-created_at')
  .then(posts => {console.log(req.user); res.json(posts);
  })
  .reject(err => {
    res.status(500).json(err)
  });
})


postRoutes.get('/:id', (req, res, next) => {
  Post.findById(req.params.id).populate({ path: "comments", populate: {path: "creator"}})
    .then(singlePost => {
      res.json(singlePost);
    })
    .reject(err => {
      res.status(500).json(err)
    });
})

postRoutes.post('/makepost', (req, res, next) => {
  let newPost = new Post({
    creator: req.body.user,
    title: req.body.title,
    content: req.body.content,
  });
  newPost.save()
  .then(result =>

     res.status(200).json(result))
  .catch(err => console.log(err))

});

postRoutes.put("/edit/:id", (req, res, next) => {
  const updates = {
    title: req.body.title,
    content: req.body.content
  };
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
