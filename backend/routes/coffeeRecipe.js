const router = require('express').Router();
const CoffeeRecipe = require('../models/coffeeRecipeModel');
const fs = require('fs');

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Sent get request' });
});

router.post('/', (req, res) => {
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

router.patch('/', (req, res) => {
  res.status(200).json({ message: 'Sent patch request' });
});

router.delete('/', (req, res) => {
  res.status(200).json({ message: 'Sent delete request' });
});

module.exports = router;
