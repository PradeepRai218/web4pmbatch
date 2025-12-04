let express=require("express")
const multer  = require('multer')
const { createsubCategory, viewsubCategory, parentCategory } = require("../../controllers/admin/subcategoryController")


// let upload =multer({dest:"uploads/category"})

let storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"uploads/subcategory")
    },
    filename:function(req,file,cb){
        cb(null, Date.now()+file.originalname)  //1.jpg
    }
})

let upload=multer({storage:storage})

let subcategoryRoutes=express.Router()


subcategoryRoutes.post("/create",upload.single("subcategoryImage"),createsubCategory)  // //http://localhost:8000/admin/category/create

subcategoryRoutes.get("/view",viewsubCategory)  // //http://localhost:8000/admin/category/create
subcategoryRoutes.get("/parent-category",parentCategory)  // //http://localhost:8000/admin/category/create


module.exports={subcategoryRoutes}