let express=require("express")
const { colorRoutes } = require("./colorRoutes")
const { materialRoutes } = require("./materialRoutes")
const { categoryRoutes } = require("./categoryRoute")
const { subcategoryRoutes } = require("./subCategoryRoute")
const { subSubcategoryRoutes } = require("./subSubCategoryRoute")
const { productRoutes } = require("./productRoutes")
const { adminauthRoutes } = require("./adminAuthRoute")

let adminRoutes=express.Router()

adminRoutes.use('/auth',adminauthRoutes)
adminRoutes.use("/color",colorRoutes) // http://localhost:8000/admin/color
adminRoutes.use("/material",materialRoutes) // http://localhost:8000/admin/material
adminRoutes.use("/category",categoryRoutes) // http://localhost:8000/admin/category
adminRoutes.use("/subcategory",subcategoryRoutes) // http://localhost:8000/admin/subcategory
adminRoutes.use("/subsubcategory",subSubcategoryRoutes) // http://localhost:8000/admin/subcategory

adminRoutes.use("/product",productRoutes) // http://localhost:8000/admin/subcategory





// adminRoutes.post("/login",(req,res)=>{
//     res.send("hello")
// })

module.exports={adminRoutes}