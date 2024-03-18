const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const coffeeRecipeSchema = new Schema({
  coffeeName: {
    type: String,
    required: true,
  },
  coffeeRecipe: {
    type: Array,
    required: true,
  },
  coffeeDesc: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('CoffeeRecipe', coffeeRecipeSchema);
