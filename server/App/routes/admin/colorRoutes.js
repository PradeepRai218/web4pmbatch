let express=require("express")
const { createColor, viewColor, deleteColor, updateColor, multiDelete, statusChange, editData } = require("../../controllers/admin/colorController")
// const { multiDelete } = require("../../controllers/admin/materialController")
let colorRoutes=express.Router()


colorRoutes.post("/create",createColor)  // //http://localhost:8000/admin/color/create

colorRoutes.get("/view",viewColor)

colorRoutes.delete("/delete/:id",deleteColor)
colorRoutes.post("/multi-delete/",multiDelete)

colorRoutes.post("/status-change/",statusChange)
colorRoutes.get("/edit-data/:id",editData)


colorRoutes.put("/update/:id",updateColor)

module.exports={colorRoutes}