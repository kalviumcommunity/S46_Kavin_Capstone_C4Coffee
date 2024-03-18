const router = require('express').Router();
const CoffeeRecipe = require('../models/coffeeRecipeModel');
const fs = require('fs');

router.get('/api/coffeerecipe', (req, res) => {
  res.status(200).json({ message: 'Sent get request' });
});

router.post('/api/coffeerecipe', (req, res) => {
  // console.log(
  //   fs.createReadStream(
  //     'C:\\Users\\Kavin\\Pictures\\Screenshots\\Screenshot 2024-03-06 155551.png'
  //   )
  // );
  const { coffeeName, coffeeRecipe, coffeeDesc } = req.body;
  console.log(coffeeName);
  console.log(coffeeDesc);
  console.log(coffeeRecipe);
  res.status(201).json({ coffeeName, coffeeDesc, coffeeRecipe });
});

router.patch('/api/coffeerecipe', (req, res) => {
  res.status(200).json({ message: 'Sent patch request' });
});

router.delete('/api/coffeerecipe', (req, res) => {
  res.status(200).json({ message: 'Sent delete request' });
});

module.exports = router;
