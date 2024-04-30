const { addComment } = require('../controller/commentController')

const router = require('express').Router()

router.post('/addComment', addComment)

module.exports = router