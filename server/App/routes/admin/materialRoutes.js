let express=require("express")

const { creatematerial,viewmaterial,deletematerial,updatematerial } = require("../../controllers/admin/materialController")
const { multiDelete } = require("../../controllers/admin/materialController")

let materialRoutes=express.Router()


materialRoutes.post("/create",creatematerial)  // //http://localhost:8000/admin/material/create

materialRoutes.get("/view",viewmaterial)

materialRoutes.delete("/delete/:id",deletematerial)


materialRoutes.put("/update/:id",updatematerial)


materialRoutes.post("/multi-delete",multiDelete) 

module.exports={materialRoutes}