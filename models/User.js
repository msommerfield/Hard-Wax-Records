const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const User = new Schema({
    firstName: String,
    lastName: String,
    userName: String,
    password: String,
    records: [
        {
        type: Schema.Types.ObjectId,
        ref: "Vinyl"
        }    
    ]
  })

module.exports = mongoose.model("User", User);