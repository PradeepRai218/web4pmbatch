const { categoryModel } = require("../../models/category.model");
const { subcategoryModel } = require("../../models/subCategory.model");
const { subSubcategoryModel } = require("../../models/subsubCategory.model");

let createsuSubCategory = async (req, res) => {
  // console.log(req.body);
  // console.log(req.file);

  let insertObj = { ...req.body };

  if (req.file) {
    if (req.file.filename) {
      insertObj["subSubcategoryImage"] = req.file.filename;
    }
  }

  try {
    let subSubcategoryRes = await subSubcategoryModel(insertObj);
    let subSubcatRes = await subSubcategoryRes.save();

    res.send({
      _status: true,
      _message: "subCategory Added",
      subSubcatRes,
    });
  } catch (err) {
    let error = {};
    for (let key in err.errors) {
      error[key] = err.errors[key].message;
      // console.log(key,err.errors[key].message);
    }

    res.send({
      _status: false,
      _message: "Error Found",
      error,
    });
  }
};

let viewsubsubCategory = async (req, res) => {
  let subSubcategoryData = await subSubcategoryModel
    .find()
    .populate("parentCategory", "categoryName")
     .populate("subCategory", "subcategoryName");
    
  let staticPath = process.env.SUBSUBCATEGORYIMAGEPATH;
  res.send({
    _status: true,
    _message: "category Found",
    staticPath,
    subSubcategoryData,
  });
};

let parentCategory = async (req, res) => {
  let category = await categoryModel
    .find({ categoryStatus: true })
    .select("categoryName");
  res.send({
    _status: true,
    _message: "Parent category Found",
    category
  });
};


let subCategory=async (req,res)=>{
  let {pid}=req.params


   let subcategory = await subcategoryModel
    .find({ subcategoryStatus: true,parentCategory:pid })
    .select("subcategoryName");
  res.send({
    _status: true,
    _message: "Parent category Found",
    subcategory
  });
}
module.exports = {
  createsuSubCategory,
  viewsubsubCategory,
  parentCategory,
  subCategory
};
