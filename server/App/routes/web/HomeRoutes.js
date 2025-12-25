let express=require("express")
const { getSlider, getProducts } = require("../../controllers/web/HomeController")

let homeRoutes=express.Router()

// homeRoutes.get('/getslider',getSlider)

homeRoutes.get('/getproduct',getProducts)

module.exports={homeRoutes}