let express=require("express")
const { userRoutes } = require("./AuthRoutes")
const { homeRoutes } = require("./HomeRoutes")
const { cartRoutes } = require("./cartRoutes")
let webRoutes=express.Router()

webRoutes.use('/user',userRoutes)
webRoutes.use('/home',homeRoutes)

webRoutes.use('/cart',cartRoutes)
module.exports={webRoutes}