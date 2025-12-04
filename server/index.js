let express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
let cors = require("cors");
const { adminRoutes } = require("./App/routes/admin/adminRoutes");
let App = express();

App.use(cors());
App.use(express.json());

App.use("/admin", adminRoutes); //// http://localhost:8000/admin/

mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.DBNAME}`).then((res) => {
App.use("/uploads/category",express.static("uploads/category"))
App.use("/uploads/subcategory",express.static("uploads/subcategory"))  
App.use("/uploads/subsubcategory",express.static("uploads/subsubcategory"))  
       
  App.listen(process.env.PORT, () => {
    console.log("Server Start", process.env.PORT);
  });


});

// http://localhost:8000/admin/
