const express = require('express');
const passport = require('passport');
const path = require('path');
const Message = require('../models/Message');
const bcrypt = require('bcrypt');
const debug = require('debug')("angularauth:"+path.basename(__filename).split('.')[0]);

var messageRoutes = express.Router();

messageRoutes.post('/send', (req, res, next) => {
  let content = req.body.content;

        var newMessage= new Message({
            content
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

module.exports = messageRoutes;
