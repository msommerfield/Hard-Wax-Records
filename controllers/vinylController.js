const Rating = require('../models/Rating.js')
const  Vinyl  = require('../models/Vinyl.js')
const Review = require('../models/Review.js')

const vinylController = {
    index: (req, res) => {
        Vinyl.find().then(vinyls => {
            res.render('vinyls/index', {vinyls})
        })
    },
    new: (req, res) => {
        res.render('vinyls/new', {
            userId: req.params.userId
        })
    },
    create: (req, res) => {
        Vinyl.create(req.body).then(vinyl => {
            vinyl.save()
            res.redirect('/')
        })
    },
    show: (req, res) => {
        Vinyl.findById(req.params.userId).then(vinyl => {
            res.render('vinyls/show', {vinyl, userId: req.params.userId})
        })
    },
    edit: (req, res) => {
        Vinyl.findById(req.params.vinylId)
        .then(vinyl => {
            res.render('vinyls/edit', {vinyl}
            )
        })
},
    update: (req, res) => {
        Vinyl.findByIdAndUpdate(req.params.vinylId, {content: req.body.content}, {new: true}).then(updatedVinyl => {
            res.redirect(`/`)
        })
    },
    delete: (req, res) => {
        Vinyl.findByIdAndDelete(req.params.userId).then(() => {
            res.redirect(`/`)
        })
}
}

module.exports = vinylController