const { categoryModel } = require("../../models/category.model");

let createCategory = async (req, res) => {
  // console.log(req.body);
  // console.log(req.file);

  let insertObj = { ...req.body };

  if (req.file) {
    console.log("Hello");

    if (req.file.filename) {
      insertObj["categoryImage"] = req.file.filename;
    }
  }

  try {
    let categoryRes = await categoryModel(insertObj);
    let catRes = await categoryRes.save();

    res.send({
      _status: true,
      _message: "Category Added",
      catRes,
    });
  } catch (err) {
    let error={}
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

let viewCategory = async (req, res) => {
  
  let categoryData = await categoryModel.find()
  let staticPath=process.env.CATEGORYIMAGEPATH
  res.send({
    _status: true,
    _message: "category Found",
    staticPath,
    categoryData,
  });
};

module.exports = {
  createCategory,viewCategory
};
