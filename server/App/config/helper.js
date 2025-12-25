const { adminModel } = require("../models/admin.model");
const nodemailer = require("nodemailer");
let adminCreate = async () => {
  let checkMyUser = await adminModel.findOne();

  if (checkMyUser) {
       // console.log(checkMyUser); 
        
  } else {
    let obj = {
      adminUserName: process.env.ADMINUSERNAME,
      adminPassword: process.env.ADMINPASSWORD,
      adminRole: 1,
    };
    let admin = await adminModel(obj);
    await admin.save();
  }
};


const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "pradeep.9997@gmail.com",
    pass: "yuhmzgvthgqtypux",
  },
});

module.exports = { adminCreate,transporter };
