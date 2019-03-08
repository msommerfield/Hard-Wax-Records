const mongoose = require('mongoose')
const Review = require('./Review.js').schema
const Schema = mongoose.Schema


const VinylSchema = new Schema({
  artist: String,
  albumName: String,
  releaseDate: Date,
  imgLink: String,
  reviews: [Review],
});


module.exports = mongoose.model('Vinyl', VinylSchema)