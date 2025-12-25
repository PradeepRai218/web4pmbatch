let express=require("express")
const { addtoCart, viewCart } = require("../../controllers/web/cartControlller")
const { checkToken } = require("../../middleware/checkToken")

let cartRoutes=express.Router()

cartRoutes.post('/add-to-cart', checkToken ,  addtoCart)
cartRoutes.post('/view-cart', checkToken ,  viewCart)


module.exports={cartRoutes}