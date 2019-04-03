//setup api routes
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs'); //Needed for password hashing
const jwt = require('jsonwebtoken');
const keys = require('/home/hc-19/Carlosf96/MVP/config/keys');
//load input validation
const validateRegisterInput = require('/home/hc-19/Carlosf96/MVP/validation/register.js');
const validateLoginInput = require('/home/hc-19/Carlosf96/MVP/validation/login');
//load user model
const User = require('/home/hc-19/Carlosf96/MVP/models/User.js');

router.post('/register', (req, res) => {
  //form validation
  const {errors, isValid} = validateRegisterInput(req.body);
  //check validation
  if(!isValid){
    return res.status(400).json(errors)
  }

  User.findOne({email: req.body.email}).then(user=>{
    if(user){
      return res.status(400).json({ email: 'Email already exists'});
    }
  
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  })

  bcrypt.genSalt((err, salt)=>{
    bcrypt.hash(newUser.password, salt, (err, hash)=>{
      if(err) throw err;
      newUser.password=hash;
      newUser
        .save()
        .then(user=> res.json(user))
        .catch(err=>console.log(err));
     });
    });
  
  })
});


