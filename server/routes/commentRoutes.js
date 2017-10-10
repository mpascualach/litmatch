const express = require('express');
const passport = require('passport');
const path = require('path');
const Comment = require('../models/Comment');
const Post = require('../models/Post');
const bcrypt = require('bcrypt');
const debug = require('debug')("angularauth:" + path.basename(__filename).split('.')[0]);

var commentRoutes = express.Router();

commentRoutes.get('/list', (req, res, next) => {
  Comment.find()
    .then(list => {
      res.json(list);
    })
    .reject(err => {
      res.status(500).json(err)
    });
})

commentRoutes.post('/makecomment', Post, (req, res, next) => {
  let content = req.body.content;

  var newComment = new Comment({
    content
  });

  newComment.save((err) => {
    if (err) {
      res.status(400).json({
        message: "Something went wrong"
      });
    } else {
      req.login(newComment, function(err) {
        if (err) {
          return res.status(500).json({
            message: 'something went wrong :('
          });
        }
        res.status(200).json(newComment);
      });
    }
  })
});

commentRoutes.put("/edit/:id", (req, res, next) => {
  const updates = {
    content: req.body.content
  };
  console.log(updates)
  User.findByIdAndUpdate(req.params.id, updates, (err) => {
    if (err) {
      return res.status(400).json({
        message: "Unable to update comment",
        err
      });
    }
    res.json({
      message: 'Comment updated successfully'
    });
  });
});

commentRoutes.get("/delete/:id", (req, res) => {
  let commentId = req.params.id;
  Comment.deleteOne({
      _id: commentId
    }).then(message => {
      return res.status(200).json(message);
    })
    .catch(err => res.status(500).json(err));
});

module.exports = commentRoutes;
