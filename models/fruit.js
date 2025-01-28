// Import Mongoose
const mongoose = require("mongoose");

// Create our Schema
const fruitSchema = new mongoose.Schema({
  name: String,
  isReadyToEat: Boolean,
});

// Register the model
const Fruit = mongoose.model("Fruit", fruitSchema); // create model

module.exports = Fruit;
