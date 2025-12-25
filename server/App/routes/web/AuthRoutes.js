let express=require("express")
const { createUser, sendOTP, login, changePassword } = require("../../controllers/web/AuthController")
const { checkToken } = require("../../middleware/checkToken")

let userRoutes=express.Router()
userRoutes.post('/send-otp',sendOTP)

userRoutes.post('/create',createUser)
userRoutes.post('/login',login)
userRoutes.post('/change-password',checkToken,  changePassword)


module.exports={userRoutes}


