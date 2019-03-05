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
  releaseDate: Date,
  imgLink: String,
  reviews: [Review]
});

module.exports = {
  Vinyl: mongoose.model("Vinyl", Vinyl),
  Review: mongoose.model("Review", Review)
};