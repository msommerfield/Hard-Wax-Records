// Require Dependencies 
const express = require('express')
const router = express.Router()

// Require Controllers

const vinylController = require('../controllers/vinylController.js')
// const vinylController = require('../controllers/vinylController.js')

//Vinyl Routes
router.get('/', vinylController.index)
router.get('/new', vinylController.new)
router.post('/', vinylController.create)
router.get('/:vinylId', vinylController.show)
router.get('/:vinylId/edit', vinylController.edit)
router.put('/:vinylId', vinylController.update)
router.delete('/:vinylId', vinylController.delete)

//Review Routes
router.get('/vinyls/:vinylId/reviews', reviewController.index)
router.get('/vinyls/:vinylId/reviews/new', viewController.new)
router.post('/vinyls/:vinylId/reviews', viewController.create)
router.get('/vinyls/:vinylId/reviews/:reviewlId', viewController.show)
router.get('/vinyls/:vinylId/reviews/:reviewId/edit', viewController.edit)
router.put('/vinyls/:vinylId/reviews/:reviewlId', viewController.update)
router.delete('/vinyls/:vinylId/reviews/:reviewlId', viewController.delete)

module.exports = router