const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const RatingSchema= new Schema({
    starReview: String
  });

module.exports = mongoose.model("Rating", RatingSchema);

