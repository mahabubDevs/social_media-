const express = require("express")
const router = express.Router()


router.get('/log',(req,res)=>{
    res.send("this is from log")
})

module.exports = router 