const mongoose = require("./connection.js");
const User = require("../models/User.js");
const Vinyl = require("../models/Vinyl.js");
const Review = require("../models/Review")

const atlreview = new Review ({
    rating: 5,
    content: "Andre and Big Boi display a unique ability to describe ghetto life while offering up life-affirming possibilities"
})

const ageofreview = new Review ({
    rating: 5,
    content: "A synthesiser melody follows, wide-eyed with wonderment, then a melancholy melodica, sighing in the breeze."
})

const kanyereview = new Review ({
    rating: 3,
    content: "I miss the old Kanye, but his head was still big then."
})

const whitreview= new Review ({
    rating: 5,
    content: "Can a duo be a supergroup? Because they are."
})

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

const atliens = new Vinyl({
    artist: "Outkast",
    albumName: "ATLiens",
    releaseDate: new Date("<1996-08-27>"),
    imgLink: "https://i.imgur.com/FaRMoWI.jpg",
    reviews: [atlreview]
  });

  const consent = new Vinyl({
      artist: "New Order",
      albumName: "Corruption and Lies",
      releaseDate: new Date("<1983-05-02>"),
      imgLink: "https://i.imgur.com/ANVAkVu.jpg",
      reviews: [ageofreview]
  });

  const kanye = new Vinyl({
    artist: "Kanye West",
    albumName: "Graduation",
    releaseDate: new Date("<2007-09-11>"),
    imgLink: "https://i.imgur.com/99upHZP.jpg",
    reviews: [kanyereview]
  });

  const whit = new Vinyl({
      artist: "Whitney",
      albumName: "Light Upon the Lake",
      releaseDate: new Date("<2016-06-03>"),
      imgLink: "https://i.imgur.com/CfDITJv.jpg",
      reviews: [whitreview]
  });


// User.remove({})
//     .then(() => User.create([atliens]))
//     .then(() => {
//         console.log("seeded successfully");
//         mongoose.connection.close();
//     })
//     .catch(err => console.log(err, "error!"));

// Vinyl.remove({})
//     .then(() => User.create([atliens, fellinis, desta, littleBangcock]))
//     .then(() => {
//         console.log("seeded successfully");
//         mongoose.connection.close();
//     })
//     .catch(err => console.log(err, "error!"));

Vinyl.deleteMany({})
    .then(()=> Review.deleteMany({}))
    .then(()=>Review.create(atlreview, ageofreview, kanyereview, whitreview))
    .then(()=>console.log(atlreview.content + " has been added to DB"))
    .then(() => Vinyl.create(atliens, consent, kanye, whit))
    .then(() => console.log(atliens.artist + " has been added to DB"))
    .catch((err) => console.log(err))
    .then(() => mongoose.connection.close())