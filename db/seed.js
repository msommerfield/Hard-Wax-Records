const mongoose = require("./connection.js");
const User = require("../models/Rating.js/index.js");
const Vinyl = require("../models/Vinyl.js");
const Review = require("../models/Review")

const atlreview = new Review ({
    userName: "Kanye",
    content: "Andre and Big Boi display a unique ability to describe ghetto life while offering up life-affirming possibilities"
})

const ageofreview = new Review ({
    userName: "Jimbo",
    content: "A synthesiser melody follows, wide-eyed with wonderment, then a melancholy melodica, sighing in the breeze."
})

const kanyereview = new Review ({
    userName: "Kendrick",
    content: "I miss the old Kanye, but his head was still big then."
})

const whitreview= new Review ({
    userName: "Freddy",
    content: "Can a duo be a supergroup? Because they are."
})

const angreview= new Review ({
    userName: "Joanie",
    content: "She's dear diarying and has a truly unique voice."
})

const blondereview= new Review ({
    userName: "Sadie",
    content: "Feminist dream pop masterwork in the best way possible."
})

const guccireview= new Review ({
    userName: "Lindsey",
    content: "Living off of the same road that Gucci Mane did, it is awesome to hear about all of his stories at the Texaco on Gresham, Bouldercrest Rd, and throughout East Atlanta. His music is dope and it makes it even better that he continued to write while in prison. Also, what better way to get into the Christmas spirit than with East Atlanta Santa himself!."
})

const tupacreview= new Review ({
    userName: "Cam",
    rating: 5,
    content: "The magnum opus of his career."
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

  const angel = new Vinyl({
    artist: "Angel Olsen",
    albumName: "My Woman",
    releaseDate: new Date("<2016-09-02>"),
    imgLink: "https://i.imgur.com/jkD3nlw.jpg",
    reviews: [angreview]
});

const blondeRed = new Vinyl({
    artist: "Blonde Redhead",
    albumName: "23",
    releaseDate: new Date("<2007-04-10>"),
    imgLink: "https://i.imgur.com/G7lA1eN.jpg",
    reviews: [blondereview]
});

const gucci = new Vinyl({
    artist: "Gucci Mane",
    albumName: "Droptopwop",
    releaseDate: new Date("<2017-05-26>"),
    imgLink: "https://i.imgur.com/KQUCOng.jpg",
    reviews: [guccireview]
});

const  tupac= new Vinyl({
    artist: "2Pac",
    albumName: "Me Against the World",
    releaseDate: new Date("<1995-03-14>"),
    imgLink: "https://i.imgur.com/CfchBOD.jpg",
    reviews: [tupacreview]
});


Vinyl.deleteMany({})
    .then(()=> Review.deleteMany({}))
    .then(()=>Review.create(atlreview, ageofreview, kanyereview, whitreview, angreview, blondereview, guccireview, tupacreview))
    .then(()=>console.log(atlreview.content + " has been added to DB"))
    .then(() => Vinyl.create(atliens, consent, kanye, whit, angel, blondeRed, gucci, tupac))
    .then(() => console.log(atliens.artist + " has been added to DB"))
    .catch((err) => console.log(err))
    .then(() => mongoose.connection.close())