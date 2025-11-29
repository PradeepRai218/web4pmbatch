let mongoose = require("mongoose");

let categorySchema = mongoose.Schema({
  categoryName: {
    type: String,
    minLength: [2, "Please Fill The Name with 2 Letters"],
    maxLength: 10,
    required: [true, "Plese Fill The category Name"],
    validate: {
      validator: async function (v) {
        const category = await this.constructor.findOne({
          categoryName: v,
          deletedAt: null,
        });
        return !category;
      },
      message: (props) => `The specified Category is already in use.`,
    },
  },
  categoryDes: String,
  categoryImage: String,
  categoryOrder: Number,
  isDeleted: {
    type: Boolean,
    default: false,
  },
  deletedAt: {
    type: Date,
    default: null,
  },
  categoryStatus: {
    type: Boolean,
    default: true,
  },
});

let categoryModel = mongoose.model("category", categorySchema);

module.exports = { categoryModel };
