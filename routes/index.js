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
router.get('/:userId', vinylController.show)
router.get('/:userId/edit', vinylController.edit)
router.put('/:userId', vinylController.update)
router.delete('/:userId', vinylController.delete)

// //Vinyl Routes
// router.get('/users/:userId/vinyls', vinylController.index)
// router.get('/users/:userId/vinyls/new', vinylController.new)
// router.post('/users/:userId/vinyls', vinylController.create)
// router.get('/users/:userId/vinyls/:vinylId', vinylController.show)
// router.get('/users/:userId/vinyls/:vinylId/edit', vinylController.edit)
// router.put('/users/:userId/vinyls/:vinylId', vinylController.update)
// router.delete('/users/:userId/vinyls/:vinylId', vinylController.delete)

module.exports = router