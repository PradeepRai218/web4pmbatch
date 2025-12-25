const { adminModel } = require("../../models/admin.model");

let adminLogin = async (req, res) => {
  console.log(req.body);
  let adminData = await adminModel.findOne(req.body);
  console.log(adminData);

  if (adminData) {
    res.send({
      _status: true,
      _message: "Login Done",
      adminData,
    });
  } else {
    res.send({
      _status: false,
      _message: "Invalid Uername or Password",
     
    });
  }

};

let getAdminDetails = async (req, res) => {
  let {id}=req.params

  console.log(id);
  
  try{
      let adminData = await adminModel.findOne({_id:id});



    res.send({
      _status: true,
      _message: "Login Done",
      adminData,
    });
 
  }
  catch(err){
      res.send({
      _status: false,
      _message: "Id Not matched",
    
    });
  }
  

};



module.exports = { adminLogin,getAdminDetails };
