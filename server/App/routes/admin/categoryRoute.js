let express=require("express")
const multer  = require('multer')
const { createCategory, viewCategory } = require("../../controllers/admin/categoryController")

// let upload =multer({dest:"uploads/category"})

let storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"uploads/category")
    },
    filename:function(req,file,cb){
        cb(null, Date.now()+file.originalname)  //1.jpg
    }
})

let upload=multer({storage:storage})

let categoryRoutes=express.Router()


categoryRoutes.post("/create",upload.single("categoryImage"),createCategory)  // //http://localhost:8000/admin/category/create

categoryRoutes.get("/view",viewCategory)  // //http://localhost:8000/admin/category/create


module.exports={categoryRoutes}