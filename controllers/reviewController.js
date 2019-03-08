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
        Vinyl.findById(req.params.vinylId)
        .then((vinyl) => {
            const review = vinyl.reviews.id(req.params.reviewId).remove()
            vinyl.save()
        }).then(() => {
            res.redirect(`/${req.params.vinylId}`)
        }).catch((error) => {
            console.log(error)
        })
}
}

module.exports = reviewController

