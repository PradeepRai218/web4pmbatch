let mongoose = require("mongoose");

let adminSchema = mongoose.Schema({
  adminUserName: {
    type: String,
    minLength: [2, "Please Fill The Name with 2 Letters"],
    maxLength:40,
    
  },
  adminPassword: String,
  adminRole:{
    type:String,
    enum:["1", "2", "3"],
  }
});

let adminModel = mongoose.model("admin", adminSchema);

module.exports = { adminModel };
