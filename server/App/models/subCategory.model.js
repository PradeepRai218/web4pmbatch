let mongoose = require("mongoose");

let subcategorySchema = mongoose.Schema({
  subcategoryName: {
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
  subcategoryImage: String,
  subcategoryOrder: Number,
  isDeleted: {
    type: Boolean,
    default: false,
  },
  deletedAt: {
    type: Date,
    default: null,
  },
  subcategoryStatus: {
    type: Boolean,
    default: true,
  },
});

let subcategoryModel = mongoose.model("subcategory", subcategorySchema);

module.exports = { subcategoryModel };
