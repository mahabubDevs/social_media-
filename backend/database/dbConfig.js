const mongoose = require('mongoose')

exports.connect = ()=>{
    mongoose.connect(process.env.DATABASE_CONNECT).then(()=>{
        console.log("Database Successfully Connected")
    })
}