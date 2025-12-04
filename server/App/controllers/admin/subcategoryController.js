const { categoryModel } = require("../../models/category.model");
const { subcategoryModel } = require("../../models/subCategory.model");

let createsubCategory = async (req, res) => {
  // console.log(req.body);
  // console.log(req.file);

  let insertObj = { ...req.body };

  if (req.file) {
    if (req.file.filename) {
      insertObj["subcategoryImage"] = req.file.filename;
    }
  }

  try {
    let categoryRes = await subcategoryModel(insertObj);
    let catRes = await categoryRes.save();

    res.send({
      _status: true,
      _message: "subCategory Added",
      catRes,
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

let viewsubCategory = async (req, res) => {
  let subcategoryData = await subcategoryModel
    .find()
    .populate("parentCategory", "categoryName");

    
  let staticPath = process.env.SUBCATEGORYIMAGEPATH;
  res.send({
    _status: true,
    _message: "category Found",
    staticPath,
    subcategoryData,
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

module.exports = {
  createsubCategory,
  viewsubCategory,
  parentCategory
};
