require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const cors = require('cors');

const coffeeRecipeRoutes = require('./routes/coffeeRecipe');
const userRoutes = require('./routes/user');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(passport.initialize());

require('./config/passport');

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use('/api/coffeerecipe', coffeeRecipeRoutes);
app.use('/user', userRoutes);

const PORT = process.env.PORT || 7300;

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log('Connected to database');

  app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
  });
});
