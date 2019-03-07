const Rating = require('../models/Rating.js')
const Vinyl = require('../models/Vinyl.js')

const ratingController = {
    create: (req, res) => {
        let vinylId = req.params.vinylId
        Rating.create(req.body).then(rating => {
            Vinyl.findById(req.params.vinylId).then(vinyl => {
                vinyl.ratingss.push(rating)
                vinyl.save()
                res.redirect(`/${vinylId}`)
        })
        })
    },
    show: (req, res) => {
        Rating.findById(req.params.vinylId.reviewId).then(vinyl => {
            res.render(`vinyls/${vinylId}/reviews/${reviewId}`, {vinyl, vinylId: req.params.reviewId})
        })
    },
    delete: (req, res) => {
        Vinyl.findByIdAndDelete(req.params.vinylId.reviewId).then(() => {
            res.redirect(`/${vinylId}`)
        })
}
}

module.exports = ratingController

