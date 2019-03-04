const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Review = new Schema({
  rating: Number,
  content: String,
  createdAt: {
    type: Date,
    default: Date.now()
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

const Vinyl = new Schema({
  artist: String,
  albumName: String,
  releaseDate: {type: Date},
  albumArt: String,
  reviews: [Review]
});

module.exports = {
  Chirp: mongoose.model("Vinyl", Vinyl),
  Comment: mongoose.model("Review", Review)
};