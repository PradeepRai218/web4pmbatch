let express = require("express");
const multer = require("multer");
const { parentCategory, subCategory, subsubCategory, colorData, materialData, createProduct, productView, productDetails } = require("../../controllers/admin/productController");

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/product");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname); //1.jpg
  },
});


let upload=multer({storage:storage}).fields([
    {
        name:'productImage',
        maxCount:1
    },
     {
        name:'productbackImage',
        maxCount:1
    },
    {
          name:'productGallery',
        maxCount:10
    }
])

let productRoutes=express.Router()

productRoutes.post('/create',upload,createProduct) 


productRoutes.get("/parent-category",parentCategory) 

productRoutes.get("/sub-category/:pid",subCategory) 
productRoutes.get("/sub-sub-category/:pid",subsubCategory) 

productRoutes.get("/color",colorData) 

productRoutes.get("/material",materialData) 


productRoutes.get("/view",productView) 

productRoutes.get("/product-details/:productid",productDetails) 




module.exports={productRoutes}