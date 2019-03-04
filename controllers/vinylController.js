const User = require('../models/User.js')
const { Vinyl } = require('../models/Vinyl.js')

const vinylController = {
    index: (req, res) => {
        User.findById(req.params.userId)
            .populate('vinyls')
            .then(user => {
                res.send(user.vinyls)
            })
    },
    new: (req, res) => {
        res.render('chirps/new', {
            userId: req.params.userId
        })
    },
    create: (req, res) => {
        User.findById(req.params.userId)
            .then(user => {
                Vinyl.create({
                    content: req.body.content,
                    comments: [{content: 'Vinyl is dope'}]
                })
                .then(newVinyl => {
                    user.vinyls.push(newVinyl)
                    user.save()
                    res.redirect(`/users/${req.params.userId}`)
                })
            })
    },
    show: (req, res) => {
        Vinyl.findById(req.params.vinylId).then(vinyl => {
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
        Vinyl.findByIdAndUpdate(req.params.vinylId, {content: req.body.content}, {new: true}).then(updatedVinyl => {
            res.redirect(`/users/${req.params.userId}/vinylss/${req.params.vinylId}`)
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

