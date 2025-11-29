let express=require("express")
const { colorRoutes } = require("./colorRoutes")
const { materialRoutes } = require("./materialRoutes")
const { categoryRoutes } = require("./categoryRoute")

let adminRoutes=express.Router()

adminRoutes.use("/color",colorRoutes) // http://localhost:8000/admin/color
adminRoutes.use("/material",materialRoutes) // http://localhost:8000/admin/material
adminRoutes.use("/category",categoryRoutes) // http://localhost:8000/admin/category




// adminRoutes.post("/login",(req,res)=>{
//     res.send("hello")
// })

module.exports={adminRoutes}