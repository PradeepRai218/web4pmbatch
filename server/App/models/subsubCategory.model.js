let mongoose = require("mongoose");

let subSubcategorySchema = mongoose.Schema({
  subSubcategoryName: {
    type: String,
    minLength: [2, "Please Fill The Name with 2 Letters"],
    maxLength: 50,
    required: [true, "Plese Fill The subcategory Name"],
    validate: {
      validator: async function (v) {
        const subcategory = await this.constructor.findOne({
          subcategoryName: v,
          deletedAt: null,
        });
        return !subcategory;
      },
      message: (props) => `The specified subCategory is already in use.`,
    },
  },
  parentCategory:{
    type: mongoose.Schema.Types.ObjectId,
     ref: 'category'
  },
  subCategory:{
    type: mongoose.Schema.Types.ObjectId,
     ref: 'subcategory'
  },
  subSubcategoryImage: String,
  subSubcategoryOrder: Number,
  isDeleted: {
    type: Boolean,
    default: false,
  },
  deletedAt: {
    type: Date,
    default: null,
  },
  subSubcategoryStatus: {
    type: Boolean,
    default: true,
  },
});

let subSubcategoryModel = mongoose.model("subsubcategory", subSubcategorySchema);

module.exports = { subSubcategoryModel };
