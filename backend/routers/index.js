const express = require('express')
const router = express.Router()
const questionRouter= require('./Question')
const answerRouter= require('./Answer')
const commentRouter= require('./comment')

router.get('/', (req,res) => {
    res.send("Welcome to Zcoder")
})

router.use('/question', questionRouter)
router.use('/answer', answerRouter)
router.use('/Comment', commentRouter)

module.exports = router;

