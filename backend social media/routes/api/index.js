const express = require("express")
const router = express.Router()
const reg = require("./registration.js")
const log = require("./log.js")
const auth = require("./auth.js")

router.use('/',reg)
router.use('/',log)
router.use('/auth',auth)

module.exports = router 