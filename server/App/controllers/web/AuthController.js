const { transporter } = require("../../config/helper");
let jwt= require('jsonwebtoken');

let myMap = new Map();
const bcrypt = require("bcrypt");
const { userModel } = require("../../models/userModel");
const e = require("cors");
const saltRounds = 10;
let sendOTP = async (req, res) => {
  let { userEmail } = req.body;

  let userCheck = await userModel.findOne({ userEmail });

  if (userCheck) {
    res.json({
      success: false,
      message: "Email Id Already Exist...",
    });
  } else {
    let OTP = Math.floor(Math.random() * 99999999)
      .toString()
      .slice(0, 4);

    myMap.set("OTP", OTP);

    await transporter.sendMail({
      from: '"MONSTA" <pradeep.9997@gmail.com>',
      to: userEmail,
      subject: "Hello ✔",
      text: "OTP", // plain‑text body
      html: `<b>OTP ${OTP}</b>`, // HTML body
    });

    res.json({
      success: true,
      message: "OTP sent successfully to your email",
    });
  }
};

let createUser = async (req, res) => {
  let backendOTP = myMap.get("OTP");
  let { otp } = req.body;
  if (otp == backendOTP) {
    let { userName, userEmail, userPassword, userPhone } = req.body;
    const hash = bcrypt.hashSync(userPassword, saltRounds); //

    let obj = {
      userName,
      userEmail,
      userPassword: hash,
      userPhone,
    };

    let user = await userModel(obj);
    let resObj = await user.save();
    res.send({
      success: true,
      message: "user Created",
      resObj,
    });
    //UserModel
  } else {
    res.json({
      success: false,
      message: "Invalid OTP",
    });
  }
};

let login = async (req, res) => {
  let { loginEmail, loginPassword } = req.body;

  //Login Email Check

  let userCheck = await userModel.findOne({ userEmail: loginEmail });

  if (userCheck) {
    let dbPassword = userCheck.userPassword;


    if (bcrypt.compareSync(loginPassword, dbPassword)) {

      let token = jwt.sign({_id:userCheck._id }, process.env.TOKENKEY);

      res.json({
        success: true,
        message: "Login Successfull",
        userCheck,
        token
      });
    } else {
      res.json({
        success: false,
        message: "Invalid Password",
      });
    }
  } else {
    res.json({
      success: false,
      message: "Invalid Email Id",
    });
  }
};


let changePassword=async (req, res)=>{

  let {userId,confirmPassword,newPassword,oldPassword}=req.body;

    let userCheck = await userModel.findOne({ _id: userId });
    let dbPassword = userCheck.userPassword;
  if (bcrypt.compareSync(oldPassword, dbPassword)) { //True

    if(newPassword===confirmPassword){
       let hash = bcrypt.hashSync(newPassword, saltRounds); //

        let updatedUser= await userModel.updateOne(
          { _id: userId },
          { $set: { userPassword: hash } }
        );
        return res.json({
          success: true,
          message: "Password Changed Successfully",
          updatedUser
        }); 
    }
    else{
      return res.json({
        success: false,
        message: "New Password and Confirm Password do not match",
      });
    }

  }
  else{
    return res.json({
      success: false,
      message: "Invalid Old Password",
    });
  }

}
  
module.exports = { sendOTP, createUser, login,changePassword };
