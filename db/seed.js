const mongoose = require("./connection.js");
const User = require("../models/User.js");
const Vinyl = require("../models/Vinyl.js");
const { Review } = require('../models/Vinyl.js');

// const Vinyl = new Schema({
//     artist: String,
//     albumName: String,
//     releaseDate: new Date("<YYYY-mm-dd>"),
//      imgLink: String,
//     reviews: [Review]
//   });

// const User = new Schema({
//     firstName: String,
//     lastName: String,
//     userName: String,
//     password: String,
//     records: [
//         {
//         type: Schema.Types.ObjectId,
//         ref: "Vinyl"
//         }    
//     ]
//   })

const atliens = Vinyl.create({
    artist: "Outkast",
    albumName: "ATLiens",
    releaseDate: new Date("<1996-08-27>"),
    imgLink: `../public/albumArt/ATLiens.jpg" alt="ATLiens album"`,
    reviews: [Review]
  });


User.remove({})
    .then(() => User.create([atliens]))
    .then(() => {
        console.log("seeded successfully");
        mongoose.connection.close();
    })
    .catch(err => console.log(err, "error!"));

// Vinyl.remove({})
//     .then(() => User.create([atliens, fellinis, desta, littleBangcock]))
//     .then(() => {
//         console.log("seeded successfully");
//         mongoose.connection.close();
//     })
//     .catch(err => console.log(err, "error!"));
