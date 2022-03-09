const mongoose = require("mongoose");
const { type } = require("express/lib/response");


const personSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  age: Number,
  favoriteFoods: [String],
});

module.exports = mongoose.model("person", personSchema);