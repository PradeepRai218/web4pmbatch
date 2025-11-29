let mongoose = require("mongoose");

let colorSchema = mongoose.Schema({
  colorName: {
        type: String,
        minLength: [2, "Please Fill The Name with 2 Letters"],
        maxLength: 10,
        required: [true, "Plese Fill The Color Name"],
        validate: {
            validator: async function (v) {
                const color = await this.constructor.findOne({ colorName: v,deletedAt:null });
                return !color;
            },
            message: (props) => `The specified color is already in use.`,
        },
  },
  colorCode: {
    type: String,
    required: [true, "Plese Fill The Color Code"],
    minLength: [2, "Please Fill The Name with 2 Letters"],
    maxLength: 10,
  },
  colorOrder: Number,
  isDeleted: {
    type: Boolean,
    default: false,
  },
  deletedAt: {
    type: Date,
    default: null,
  },
  colorStatus: {
    type: Boolean,
    default: true,
  },
});

let colorModel = mongoose.model("color", colorSchema);

module.exports = { colorModel };
