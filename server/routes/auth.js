const express = require('express');
const passport = require('passport');
const path = require('path');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const debug = require('debug')("angularauth:"+path.basename(__filename).split('.')[0]);

var authRoutes = express.Router();

// Users can't execute these functions:
authRoutes.get('/list', (req, res, next) => {
  User.find().then(list => {
      res.json(list);
    })
    .reject(err => {
      res.status(500).json(err)
    });
})

authRoutes.get('/deleteall', (req, res, next) => {
  User.remove().then(message => {
    return res.status(200).json(message);
  })
  .catch(err => res.status(500).json(err));
})
//They're just there for me to clean the user database should I need to

//Here's the list of website-accessible functions begin
authRoutes.post('/signup', (req, res, next) => {
  let username = req.body.username;
  let password = req.body.password;
  let email = req.body.email;

  if (!username && !password && !email)
    return res.status(400).json({ message: 'Please provide us with a username, password and email' });

  if (!email && !password)
    return res.status(400).json({ message: 'Please provide us with an email and password' });

  if (!email && !username)
    return res.status(400).json({ message: 'Please provide us with a username and email' });

  if (!username && !password)
    return res.status(400).json({ message: 'Please provide us with a username and password' });

  if (!username)
    return res.status(400).json({ message: 'Please provide us with a username' });

  if (!password)
    return res.status(400).json({ message: 'Please provide us with a password' });

  if (!email)
    return res.status(400).json({ message: 'Please provide us with an email' });

  debug('Find user in DB');

  if (!email.includes("@"))
  return res.status(400).json({ message: 'Your e-mail needs to contain an @ sign' });

  User.findOne({ username },'_id').exec().then(user =>{
    if(user)
      return res.status(400).json({ message: 'The username already exists' });

    const salt     = bcrypt.genSaltSync(10);
    const hashPass = bcrypt.hashSync(password, salt);
    debug('creating user');
    const theUser = new User({
      username,
      password: hashPass,
      email,
    });
    return theUser.save()
    .then(user =>{
      req.login(user, (err) => {
        if (err)
          return res.status(500).json({ message: 'Something went wrong' });

        res.status(200).json(req.user);
      });
    })
  })
  .catch(e => {
    console.log(e);
    res.status(400).json({ message: 'Something went wrong' })
  });
});

authRoutes.get('/logout', (req, res, next) => {
  req.logout();
  res.status(200).json({ message: 'Success' });
});

authRoutes.get('/loggedin', (req, res, next) => {
  console.log(req.user)
  if (req.isAuthenticated()){
    return res.status(200).json(req.user);
  }
  else {
    res.status(403).json({ message: 'Unauthorized' });
  }
});


authRoutes.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, failureDetails) => {
    if (err)
      return res.status(500).json({ message: 'Something went wrong' });

    if (!user)
      return res.status(401).json(failureDetails);

    req.login(user, (err) => {
      if (err)
        return res.status(500).json({ message: 'Something went wrong' });

      res.status(200).json(req.user);
    });
  })(req, res, next);
});

authRoutes.get("/:id", (req,res,next)=>{
  User.findById(req.params.id)
  .then(singleUser => {res.json(singleUser);})
  .reject(err => { res.status(500).json(err)});
})

authRoutes.put("/:id/edit", (req, res ,next) => {
  console.log(req.user , req.params)
  const updates = {
    username: req.body.username,
    email: req.body.email,
    location: req.body.location,
    favouriteGenre: req.body.favouriteGenre,
    favouriteBook: req.body.favouriteBook
  };
  console.log(updates)
  User.findByIdAndUpdate(req.params.id, updates, (err) => {
    if (err) {
      return res.status(400).json({ message: "Unable to update User", err});
    }
    res.json({ message: 'User updated successfully'});
  });
});


module.exports = authRoutes;
