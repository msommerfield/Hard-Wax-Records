// Require Dependencies 
const express = require('express')
const router = express.Router()

// Require Controllers

const userController = require('../controllers/userController.js')
const vinylController = require('../controllers/vinylController.js')

//User Routes
router.get('/', userController.index)
router.get('/new', userController.new)
router.post('/', userController.create)
router.get('/:userId', userController.show)
router.get('/:userId/edit', userController.edit)
router.put('/:userId', userController.update)
router.delete('/:userId', userController.delete)

// //Vinyl Routes
router.get('/users/:userId/vinyls', vinylController.index)
router.get('/users/:userId/vinyls/new', vinylController.new)
router.post('/users/:userId/vinyls', vinylController.create)
router.get('/users/:userId/vinyls/:vinylId', vinylController.show)
router.get('/users/:userId/vinyls/:vinylId/edit', vinylController.edit)
router.put('/users/:userId/vinyls/:vinylId', vinylController.update)
router.delete('/users/:userId/vinyls/:vinylId', vinylController.delete)

module.exports = router