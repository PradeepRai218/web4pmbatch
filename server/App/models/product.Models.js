let mongoose = require("mongoose");

let productSchema = mongoose.Schema({
  productName: {
    type: String,
    minLength: [2, "Please Fill The Name with 2 Letters"],
    maxLength: 50,
    required: [true, "Plese Fill The product Name"],
    validate: {
      validator: async function (v) {
        const product = await this.constructor.findOne({
          productName: v,
          deletedAt: null,
        });
        return !product;
      },
      message: (props) => `The specified product is already in use.`,
    },
  },
  parentCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "category",
  },
  subCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "subcategory",
  },
  subsubCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "subsubcategory",
  },
  productMeterial: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "material",
    },
  ],
  productColor: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "color",
    },
  ],
  prodcutType: {
    type: String,
    //     Featured //New Arrivals/Onsale
    enum: ["1", "2", "3"], // Allowed values for the 'role' field
  },
  productBestSelling: Boolean,
  productToprated: Boolean,
  productUpsell: Boolean,
  productPrice: Number,
  productSalePrice: Number,
  productStocks: Number,

  productOrder: Number,
  productImage: String,
  productbackImage: String,
  productGallery: Array,
  productDescription: String,
  isDeleted: {
    type: Boolean,
    default: false,
  },
  deletedAt: {
    type: Date,
    default: null,
  },
  productStatus: {
    type: Boolean,
    default: true,
  },
});

let productModel = mongoose.model("product", productSchema);

module.exports = { productModel };
