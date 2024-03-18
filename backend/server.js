require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const coffeeRecipeRoutes = require('./routes/coffeeRecipe')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use(coffeeRecipeRoutes)

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log('Connected to database')

  app.listen(process.env.PORT, () => {
    console.log(`Listening to port ${process.env.PORT}`);
  });
});