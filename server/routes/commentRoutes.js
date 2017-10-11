const express = require('express');
const passport = require('passport');
const path = require('path');
const Comment = require('../models/Comment');
const User = require('../models/User');
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

commentRoutes.post('/makecomment', (req, res, next) => {
  const newComment = new Comment({
    creator: req.body.userId,
    content: req.body.content
  });

  newComment.save()
  .then( comment => {
    Post.findByIdAndUpdate(req.body.postId, { $push: { comments: comment._id }}, {new: true})
    .then(post => console.log(post))
    })
  .reject( err => {res.json(err); });
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
