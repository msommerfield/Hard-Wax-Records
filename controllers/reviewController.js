// const User = require('../models/User.js')
// const { Vinyl } = require('../models/Vinyl.js')

// const reviewController = {
//     new: (req, res) => {
//         res.render('chirps/new', {
//             userId: req.params.userId
//         })
//       },
//     create: (req, res) => {
//         User.findById(req.params.userId)
//             .then(user => {
//                 Vinyl.create({
//                     content: req.body.content,
//                     comments: [{content: 'Vinyl is dope'}]
//                 })
//                 .then(newVinyl => {
//                     user.vinyls.push(newVinyl)
//                     user.save()
//                     res.redirect(`/users/${req.params.userId}`)
//                 })
//             })
//         },
//     edit: (req, res) => {
//         Vinyl.findById(req.params.vinylId)
//         .then(vinyl => {
//             res.render('vinyls/edit', {
//                 vinyl,
//                 userId: req.params.userId,
//                 vinylId: req.params.vinylId
//             })
//         })
//     },
//     delete: (req, res) => {
//         res.send("hi from delete")
//         Vinyl.findByIdAndDelete(req.params.vinylId).then(() => {
//             console.log('deleted vinyl')
//             res.redirect(`/users/${req.params.userId}`)
//         })
//     }
// }

// module.exports = vinylController

