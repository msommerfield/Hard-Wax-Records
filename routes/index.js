// Require Dependencies 
const express = require('express')
const router = express.Router()

// Require Controllers

const vinylController = require('../controllers/vinylController.js')
const reviewController = require('../controllers/reviewController.js')

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

module.exports = router