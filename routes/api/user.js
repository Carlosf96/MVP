//setup api routes
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('/home/hc-19/Carlosf96/MVP/config/keys');

//load input validation
const validateRegisterInput = require('/home/hc-19/Carlosf96/MVP/validation/register.js');
const validateLoginInput = require('/home/hc-19/Carlosf96/MVP/validation/login');

//load user model
const User = require('/home/hc-19/Carlosf96/MVP/models/User.js');