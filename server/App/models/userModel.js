let mongoose = require("mongoose");

let userSchema = mongoose.Schema({
  userName: {
    type: String,
    minLength: [2, "Please Fill The Name with 2 Letters"],
    maxLength: 40,
  },
  userGender: String,
  userEmail: {
    type: String,
    minLength: [2, "Please Fill The Name with 2 Letters"],
    maxLength: 40,
  },
  userPassword: String,
  userPhone: String,
  userAddess: String,
});

let userModel = mongoose.model("user", userSchema);

module.exports = { userModel };
