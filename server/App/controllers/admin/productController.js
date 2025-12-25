const { categoryModel } = require("../../models/category.model");
const { colorModel } = require("../../models/color.models");
const { materialModel } = require("../../models/material.model");
const { productModel } = require("../../models/product.Models");
const { subcategoryModel } = require("../../models/subCategory.model");
const { subSubcategoryModel } = require("../../models/subsubCategory.model");

let createProduct = async (req, res) => {
  let obj = { ...req.body };
  if (req.files) {
    if (req.files.productImage) {
      obj["productImage"] = req.files.productImage[0].filename;
    }
    if (req.files.productbackImage) {
      obj["productbackImage"] = req.files.productbackImage[0].filename;
    }
    if (req.files.productGallery) {
      obj["productGallery"] = req.files.productGallery.map(
        (obj) => obj.filename
      );
    }
  }

  try {
    let productRes = await productModel(obj);
    let proRes = await productRes.save();

    res.send({
      _status: true,
      _message: "Product Added",
      proRes,
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

let parentCategory = async (req, res) => {
  let category = await categoryModel
    .find({ categoryStatus: true })
    .select("categoryName");
  res.send({
    _status: true,
    _message: "Parent category Found",
    category,
  });
};

let subCategory = async (req, res) => {
  let { pid } = req.params;

  let subcategory = await subcategoryModel
    .find({ subcategoryStatus: true, parentCategory: pid })
    .select("subcategoryName");
  res.send({
    _status: true,
    _message: "sub category  Found",
    subcategory,
  });
};

let subsubCategory = async (req, res) => {
  let { pid } = req.params;

  let subsubcategory = await subSubcategoryModel
    .find({ subSubcategoryStatus: true, subCategory: pid })
    .select("subSubcategoryName"); //subSubcategoryName
  res.send({
    _status: true,
    _message: "sub sub category  Found",
    subsubcategory,
  });
};

let colorData = async (req, res) => {
  let color = await colorModel.find({ colorStatus: true }).select("colorName");
  res.send({
    _status: true,
    _message: "Color Found",
    color,
  });
};

let materialData = async (req, res) => {
  let material = await materialModel
    .find({ materialStatus: true })
    .select("materialName");
  res.send({
    _status: true,
    _message: " material Found",
    material,
  });
};

let productView = async (req, res) => {
  let product = await productModel
    .find({ productStatus: true })
    .populate("parentCategory", "categoryName")
    .populate("subCategory", "subcategoryName")
    .populate("subsubCategory", "subSubcategoryName")
    .populate("productMeterial", "materialName")
    .populate("productColor", "colorName");
  res.send({
    _path: process.env.PRODUCTIMAGEPATH,
    _status: true,
    _message: " product Found",
    product,
  });
};

let productDetails = async (req, res) => {
  let {productid}=req.params;

  let product = await productModel
    .findOne({ _id: productid })
    .populate("parentCategory", "categoryName")
    .populate("subCategory", "subcategoryName")
    .populate("subsubCategory", "subSubcategoryName")
    .populate("productMeterial", "materialName")
    .populate("productColor", "colorName");
  res.send({
    _path: process.env.PRODUCTIMAGEPATH,
    _status: true,
    _message: " product Found",
    product,
  });
};

module.exports = {
  createProduct,
  parentCategory,
  subCategory,
  subsubCategory,
  colorData,
  materialData,
  productView,
  productDetails
};
