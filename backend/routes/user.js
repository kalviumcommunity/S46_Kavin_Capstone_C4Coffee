const router = require('express').Router();
const User = require('../models/userModel');
const { hashSync, compareSync } = require('bcrypt');
const { sign } = require('jsonwebtoken');

router.post('/signup', async (req, res) => {
  const { email, username, password } = req.body;

  const user = await User.findOne({ username });

  if (user) {
    return res.status(400).json({
      success: false,
      message: 'User already exsists',
    });
  }

  const newUser = new User({
    email,
    username,
    password: hashSync(password, 10),
  });

  newUser
    .save()
    .then((user) => {
      const payload = {
        username: user.username,
        id: user._id,
      };
      res.status(201).json({
        success: true,
        user: {
          token: sign(payload, process.env.SECRET, { expiresIn: '3d' }),
          username: user.username,
        },
      });
    })
    .catch((e) => {
      res.status(400).json({
        success: false,
        error: e,
      });
    });
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });

  if (!user) {
    return res.status(400).json({
      success: false,
      message: 'User does not exsists',
    });
  }

  if (!compareSync(password, user.password)) {
    return res.status(400).json({
      success: false,
      message: 'Invalid password',
    });
  }

  const payload = {
    username: user.username,
    id: user._id,
  };

  res.status(200).json({
    success: true,
    user: {
      token: sign(payload, process.env.SECRET, { expiresIn: '3d' }),
      username: user.username,
    },
  });
});

module.exports = router;
