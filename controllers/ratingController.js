const Rating = require('../models/Rating.js')
const Vinyl = require('../models/Vinyl.js')


const ratingController = {
    create: (req, res) => {
        let vinylId = req.params.vinylId
        Rating.create(req.body).then(rating => {
            Vinyl.findById(req.params.vinylId).then(vinyl => {
                vinyl.ratings.push(rating)
                console.log(rating)
                vinyl.save()
                res.redirect(`/${vinylId}`)
        })
        })
    },
    show: (req, res) => {
        Rating.findById(req.params.vinylId.ratingId).then(vinyl => {
            res.render(`vinyls/${vinylId}/ratings/${ratingId}`, {vinyl, vinylId: req.params.ratingId})
        })
    },
    delete: (req, res) => {
        Vinyl.findById(req.params.vinylId)
        .then((vinyl) => {
            const rating = vinyl.ratings.id(req.params.ratingId).remove()
            vinyl.save()
        }).then(() => {
            res.redirect(`/${req.params.vinylId}`)
        }).catch((error) => {
            console.log(error)
        })
}
}

module.exports = ratingController

