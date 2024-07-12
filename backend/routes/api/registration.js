const express = require("express")
const router = express.Router()


router.get('/reg',(req,res)=>{
    res.send("this is from reg")
})

module.exports = router 