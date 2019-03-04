const mongoose = require('mongoose')
const Schema = mongoose.Schema

const VinylSchema = new Schema({
  artist: String,
  albumName: String,
  releaseDate: {type: Date},
  albumArt: String
})

const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  userName: String,
  password: String,
  records: [VinylSchema]
})

const ReviewSchema = new Schema({
  review: [Comment],
  rating: Number,
  dateCreated: { type: Date, default: Date.now }
})


const VinylModel = mongoose.model('Vinyl', VinylSchema)
const UserModel = mongoose.model('User', UserSchema)
const ReviewModel = mongoose.model('Review', ReviewSchema)

module.exports = {
  Vinyl: VinylModel,
  User: UserModel,
  Review: ReviewModel
}