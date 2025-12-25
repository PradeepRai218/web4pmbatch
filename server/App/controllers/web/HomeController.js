const { productModel } = require("../../models/product.Models");

let getSlider = async (req, res) => {
 
  let slider=await sliderModel.find({sliderStatus:true});  

  res.json({
    success: true,
    path: process.env.SLIDERIMAGEPATH,
    message: "Slider Data Fetched Successfully",
    slider
  });
};

let getProducts=async (req,res)=>{
  let product=await productModel.find({productStatus:true})
  .populate('parentCategory','categoryName')
  .populate('subCategory','subCategoryName')
  .populate('subsubCategory','subsubCategoryName')
  .populate('productMeterial','materialName')
  .populate('productColor','colorName');    
  
  res.json({
    success:true,
    message:"Get Products API",
    path:process.env.PRODUCTIMAGEPATH,
    product,

  });
}

module.exports = { getSlider,getProducts };
