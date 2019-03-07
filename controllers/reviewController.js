const Review = require('../models/Review.js')
const Vinyl = require('../models/Vinyl.js')

const reviewController = {
    create: (req, res) => {
        let vinylId = req.params.vinylId
        Review.create(req.body).then(review => {
            Vinyl.findById(req.params.vinylId).then(vinyl => {
                vinyl.reviews.push(review)
                vinyl.save()
                res.redirect(`/${vinylId}`)
        })
        })
    },
    show: (req, res) => {
        Review.findById(req.params.vinylId.reviewId).then(vinyl => {
            res.render(`vinyls/${vinylId}/reviews/${reviewId}`, {vinyl, vinylId: req.params.reviewId})
        })
    },
    delete: (req, res) => {
        Vinyl.findByIdAndDelete(req.params.vinylId.reviewId).then(() => {
            res.redirect(`/`)
        })
}
}

module.exports = reviewController

