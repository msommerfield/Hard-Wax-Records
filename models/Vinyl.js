const mongoose = require('mongoose')
const Schema = mongoose.Schema

const VinylSchema = new Schema({
  artist: String,
  albumName: String,
  releaseDate: Date,
  imgLink: String,
  reviews: [],
});


module.exports = mongoose.model('Vinyl', VinylSchema)