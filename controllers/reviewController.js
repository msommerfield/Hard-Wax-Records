// const Review = require('../models/Review.js')
// const { Vinyl } = require('../models/Vinyl.js')

// const reviewController = {
//     create: (req, res) => {
//         Review.create(req.body).then(review => {
//             review.save()
//             res.redirect('/')
//         })
//     },
//     show: (req, res) => {
//         Review.findById(req.params.vinylId.reviewId).then(vinyl => {
//             res.render('vinyls/:vinylId/reviews/:reviewlId', {vinyl, vinylId: req.params.reviewId})
//         })
//     },
//     delete: (req, res) => {
//         Vinyl.findByIdAndDelete(req.params.vinylId.reviewId).then(() => {
//             res.redirect(`/`)
//         })
// }
// }

// module.exports = reviewController

