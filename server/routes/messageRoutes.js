const express = require('express');
const passport = require('passport');
const path = require('path');
const Message = require('../models/Message');
const bcrypt = require('bcrypt');
const debug = require('debug')("angularauth:"+path.basename(__filename).split('.')[0]);

var messageRoutes = express.Router();

messageRoutes.post('/send', (req, res, next) => {

        const newMessage= new Message({
            recipient: req.user._id,
            content: req.body.content
        });

        newMessage.save((err) => {
            if (err) {
                res.status(400).json({
                    message: "Something went wrong"
                });
            } else {
                req.login(newMessage, function(err) {
                    if (err) {
                        return res.status(500).json({
                            message: 'something went wrong :('
                        });
                    }
                    res.status(200).json(newMessage);
                });
            }
        });
});

messageRoutes.get('/listbyId/:id', (req,res,next)=>{
  Message.find({recipient: req.params.id})
  .then(messages => {res.json(messages);
  })
  .reject(err => {
    res.status(500).json(err)
  });
})

module.exports = messageRoutes;
