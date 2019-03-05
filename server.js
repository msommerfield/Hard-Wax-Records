const express = require('express')
const app = express()
const router = require('./routes/index.js')
const methodOverride = require('method-override')
const mongoose = require("mongoose")
const logger = require('morgan')

app.set('view engine', 'hbs')
app.use(express.static(__dirname + '/public')); // VERY IMPORTANT!! Make sure to add a '/'

// method override allows us to 
// override the method of form requests
// so method="POST" can become method="PATCH"

app.use(methodOverride('_method'))

// These following two lines are how we use
// express' built-in body-parser to handle form submissions
app.use(express.urlencoded({ extended: true }));
// Later, when we're working with JSON, we'll want to use the JSON
// feature of body parser:
app.use(express.json());


app.use('/', router)

app.use(logger('dev'))

// process.env.PORT is necessary for deployment to Heroku
// If environment variable is not provided, default to 3000
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`)
})
