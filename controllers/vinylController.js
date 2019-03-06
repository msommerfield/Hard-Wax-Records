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
        User.findById(req.params.userId)
            .then(user => {
                Vinyl.create({
                    content: req.body.content,
                    Comments: [{content: 'Vinyl is dope'}]
                })
                .then(newVinyl => {
                    user.vinyls.push(newVinyl)
                    user.save()
                    res.redirect(`/users/${req.params.userId}`)
                })
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
            res.render('vinyls/edit', {
                vinyl,
                userId: req.params.userId,
                vinylId: req.params.vinylId
            })
        })
},
    update: (req, res) => {
        res.send("hi from update")
        Vinyl.findByIdAndUpdate(req.params.vinylId, {content: req.body.content}, {new: true}).then(updatedVinyl => {
            res.redirect(`/users/${req.params.userId}/vinyls/${req.params.vinylId}`)
        })
    },
    delete: (req, res) => {
        Vinyl.findByIdAndDelete(req.params.vinylId).then(() => {
            console.log('deleted vinyl')
            res.redirect(`/users/${req.params.userId}`)
        })
}
}

module.exports = vinylController