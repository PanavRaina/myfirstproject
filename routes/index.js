const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home_controller')
router.get('/',homeController.home)
// if url has users in it then pass on the value of router value in users router file to app
router.use('/users',require('./users'))

// for any further routes, access like
// router.use('/routername',require('./route/routerfile'))

router.use('/posts',require('./posts'))

module.exports=router