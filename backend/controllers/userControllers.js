const Users = require('../models/userModel')
const {validEmail,validateLength, validateUsername} = require('../helpers/validation')
const bcrypt = require ("bcrypt")
const { jwToken } = require("../helpers/token")
const { sendVerifiedEmail } = require('../helpers/mailer');
const jwt = require("jsonwebtoken")




exports.newUser = async (req,res)=>{
     try {
        const{
            fname,
            lname,
            username,
            email,
            password,
            bMonth,
            bDay,
            bYear,
            gender,
            verified
        } = req.body

        if(!validEmail(email)){
            
            return res.status(400).json({
                message:"Invalid Email Address",
                
            })
        }

        const checkMail = await Users.findOne({email})
        if(checkMail){
            return res.status(400).json({
                message: "email already Exists"
            })
        }

        if(!validateLength(fname,3,15)){
            return res.status(400).json({
                message: "fname min 3 world and max 15 world"
            })
        }

        if(!validateLength(lname,3,15)){
            return res.status(400).json({
                message: "lname min 3 world and max 15 world"
            })
        }

        if(!validateLength(password,8,40)){
            return res.status(400).json({
                message: "Password should be minimum 8 character"
            })
        }
        // bcrypt-password
        const crypted = await bcrypt.hash(password,10)
        // console.log(crypted)
        

        // validate Username
        let tempUsername = fname + lname

        let finalUsername = await validateUsername(tempUsername)


        
        const user = await new Users({
            fname,
            lname,
            username: finalUsername,
            email,
            password: crypted,
            bMonth,
            bDay,
            bYear,
            gender,
            verified
        }).save()

        const emailToken = jwToken({ id: user._id.toString() }, "30m")
        const url = `${process.env.BASE_URL}/activate/${emailToken}`

        sendVerifiedEmail(user.email,user.fname,url)
        const token = jwToken({ id: user._id.toString() }, "7d")
        res.send(
            {
                id: user._id,
                username: user.username,
                profilepic: user.profilepic,
                fname: user.fname,
                lname: user.lname,
                token: token,
                verified: user.verified,
                message: "Registration success! Please activate your email to start"
            }
        )

     } catch (error) {
        res.status(404).json({
            message: "Can not create user"
        })
     }
}

exports.verifiedUser = async (req,res)=>{
    try {
        const {token} = req.body
        const user = jwt.verify(token,process.env.SECRET_TOKEN)
        const check = await Users.findById(user.id)
        console.log(token)
        
        if(check.verified === true){
            return res.status(400).json({
                message: "This email is already verified"
            })
        }else{
            await Users.findByIdAndUpdate(user.id,{verified:true})
            return res.status(200).json({
                message: "Account has been activated successfully"
            })
        }

    } catch (err) {
        res.status(404).json({
            message: err.message
        })
    }
}

exports.login = async(req,res) =>{
    try{
        const {email,password} = req.body
        const user = await Users.findOne({email})
        if(!user){
            return res.status(400).json({
                message: "The email address you entered is not connected to an account"
            })
        }
        const check = await bcrypt.compare(password,user.password)
        if(!check){
            return res.status(400).json({
                message: "Invalid credentials. Please try again"
            })
        }
        const token = jwToken({id:user._id.toString()},'7d')
        res.send(
            {
                id: user._id,
                username: user.username,
                profilepic: user.profilepic,
                fname: user.fname,
                lname: user.lname,
                token: token,
                verified: user.verified,
                message: "Login  success! Please activate your email to start"
            }
        )

    }catch(error){
        res.status(404).json({
            message: err.message
        })
    }
}

// "fname": "mahabub",
// "lname":"ksdjfks",
// "username":"kasdk",
// "email":"kskas",
// "password":"234543",
// "bMonth":"1",
// "bDay":"23",
// "bYear":"23",
// "gender": "femal"