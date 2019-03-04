const mongoose = require("./connection.js");
const User = require("../models/User.js");
const Vinyl = require("../models/Vinyl.js");

const Vinyl = new Schema({
    artist: String,
    albumName: String,
    releaseDate: {type: Date},
    albumArt: String,
    reviews: [Review]
  });

const fellinis = new Vinyl({
    name: "Fellini's Pizza",
    rating: 4,
    category: "Pizza",
    description:
      "Fellini's Pizza is an Italian restaurant founded in Atlanta on May 5, 1982 by Clay Harper of the Coolies. It has 7 locations and is known for its Atlanta style pizza. Its first location was opened near Little Five Points. It was voted the best pizza restaurant in Atlanta in 2013 by the Emory Wheel",
    imgLink:
      "https://thepizzasnob.files.wordpress.com/2012/08/putdooes-resize.jpg",
    foodItems: [pizza]
  });


User.remove({})
    .then(() => User.create([taq, fellinis, desta, littleBangcock]))
    .then(() => {
        console.log("seeded successfully");
        mongoose.connection.close();
    })
    .catch(err => console.log(err, "error!"));

Vinyl.remove({})
    .then(() => User.create([taq, fellinis, desta, littleBangcock]))
    .then(() => {
        console.log("seeded successfully");
        mongoose.connection.close();
    })
    .catch(err => console.log(err, "error!"));
