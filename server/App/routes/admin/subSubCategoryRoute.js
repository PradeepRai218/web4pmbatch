let express=require("express")
const multer  = require('multer')

const { createsuSubCategory, viewsubsubCategory, parentCategory, subCategory } = require("../../controllers/admin/subSubcategoryController")


// let upload =multer({dest:"uploads/category"})

let storage=multer.diskStorage({
    destination:function(req,file,cb){

        cb(null,"uploads/subsubcategory")
    },
    filename:function(req,file,cb){
        cb(null, Date.now()+file.originalname)  //1.jpg
    }
})

let upload=multer({storage:storage})

let subSubcategoryRoutes=express.Router()


subSubcategoryRoutes.post("/create",upload.single("subSubcategoryImage"),createsuSubCategory)  // //http://localhost:8000/admin/category/create
subSubcategoryRoutes.get("/view",viewsubsubCategory) 


subSubcategoryRoutes.get("/parent-category",parentCategory) 

subSubcategoryRoutes.get("/sub-category/:pid",subCategory) 





module.exports={subSubcategoryRoutes}