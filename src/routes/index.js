const router = require('express').Router()
const users = require('./users')
const photos = require('./photos')

router.use('/photos', photos)
router.use('/user', users)

module.exports = router