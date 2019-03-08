// Require Dependencies 
const express = require('express')
const router = express.Router({mergeParams: true})

// Require Controllers

const vinylController = require('../controllers/vinylController.js')
const reviewController = require('../controllers/reviewController.js')
// const ratingController = require('../controllers/ratingController.js')

//Vinyl Routes
router.get('/', vinylController.index)
router.get('/new', vinylController.new)
router.post('/', vinylController.create)
router.get('/:vinylId', vinylController.show)
router.get('/:vinylId/edit', vinylController.edit)
router.put('/:vinylId', vinylController.update)
router.delete('/:vinylId', vinylController.delete)

// Review Routes
// router.get('/vinyls/:vinylId/reviews/new', reviewController.new)
router.post('/vinyls/:vinylId/reviews', reviewController.create)
router.get('/vinyls/:vinylId/reviews/:reviewId', reviewController.show)
// router.get('/vinyls/:vinylId/reviews/:reviewId/edit', reviewController.edit)
// router.put('/vinyls/:vinylId/reviews/:reviewId', reviewController.update)
router.delete('/vinyls/:vinylId/reviews/:reviewId', reviewController.delete)

//Rating Routes
// router.post('/vinyls/:vinylId/ratings', ratingController.create)
// router.get('/vinyls/:vinylId/ratings/:ratingId', ratingController.show)
// router.delete('/vinyls/:vinylId/ratings/:ratingId', ratingController.delete)

module.exports = router