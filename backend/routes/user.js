const router = require('express').Router();
const { hashSync, compareSync } = require('bcrypt');
const { sign } = require('jsonwebtoken');
const passport = require('passport');

const User = require('../models/userModel');

router.get('/test', (req, res) => {
  res.status(200).send('got the request');
});

router.post('/signup', async (req, res) => {
  const { email, username, password } = req.body;

  //Checking if the fields are empty
  if (!email || !username || !password) {
    return res.status(400).json({
      success: false,
      message: {
        email: !email,
        username: !username,
        password: !password,
      },
    });
  }

  // Checking if the user already exists
  const user = await User.findOne({ username });
  if (user) {
    return res.status(400).json({
      success: false,
      message: 'User already exists',
    });
  }

  //Checking tha password strength
  const regex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  if (!regex.test(password)) {
    return res.status(400).json({
      success: false,
      message: 'Password is not strong',
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
      message: e.message.split(':')[2],
    });
  }
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  //Checking if the fields are empty
  if (!username || !password) {
    return res.status(400).json({
      success: false,
      message: {
        username: !username,
        password: !password,
      },
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
