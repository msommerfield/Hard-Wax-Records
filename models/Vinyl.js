const mongoose = require('../db/connection')
const Review = require('./Review.js').schema
const Rating = require('./Rating.js').schema
const Schema = mongoose.Schema


const VinylSchema = new Schema({
  artist: String,
  albumName: String,
  releaseDate: Date,
  imgLink: String,
  reviews: [Review],
  ratings: [Rating]
});


module.exports = mongoose.model('Vinyl', VinylSchema)