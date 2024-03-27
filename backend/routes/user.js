const router = require('express').Router();
const { hashSync, compareSync } = require('bcrypt');
const { sign } = require('jsonwebtoken');
const passport = require('passport');
const { userValidator } = require('../config/validator');

const User = require('../models/userModel');

router.post('/signup', async (req, res) => {
  // Using joi to validate user send details
  const { error, value } = userValidator(req.body);

  // Checking if there is any error
  if (error) {
    return res.status(400).json({
      success: false,
      message: error.details[0].message,
    });
  }

  // Getting the values after validation
  const { email, username, password } = value;

  // Checking if the user already exists
  const user = await User.findOne({ username });
  if (user) {
    return res.status(400).json({
      success: false,
      message: 'User already exists',
    });
  }

  try {
    //Creating a new user
    const newUser = await User.create({
      email,
      username,
      password: hashSync(password, 10),
    });

    //Creating a payload and creating a token using it
    const payload = {
      username: newUser.username,
      id: newUser._id,
    };
    const token = sign(payload, process.env.SECRET, { expiresIn: '3d' });

    //If new user is created token and username is sent as response
    res.status(200).json({
      success: true,
      user: {
        token: `Bearer ${token}`,
        username: newUser.username,
      },
    });
  } catch (e) {
    //If new user is not created
    res.status(400).json({
      success: false,
      message: e,
    });
  }
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  //Checking if username and password fields are not empty
  if (!username.trim().length) {
    return res.status(400).json({
      success: false,
      message: 'Username is required',
    });
  }

  if (!password.trim().length) {
    return res.status(400).json({
      success: false,
      message: 'Password is required',
    });
  }

  //Checking if the user exists
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(400).json({
      success: false,
      message: 'User does not exists',
    });
  }

  //Checking if the password is correct
  if (!compareSync(password, user.password)) {
    return res.status(400).json({
      success: false,
      message: 'Invalid password',
    });
  }

  //Creating a payload and creating a token using it
  const payload = {
    username: user.username,
    id: user._id,
  };
  const token = sign(payload, process.env.SECRET, { expiresIn: '3d' });

  //Sending token and username as response
  res.status(200).json({
    success: true,
    user: {
      token: `Bearer ${token}`,
      username: user.username,
    },
  });
});

router.get(
  '/protected',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.status(200).send({
      success: true,
      user: {
        id: req.user._id,
        username: req.user.username,
      },
    });
  }
);

module.exports = router;
