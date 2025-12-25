let express=require("express")
const multer  = require('multer')
const { adminLogin, getAdminDetails } = require("../../controllers/admin/adminAuthController")
let adminauthRoutes=express.Router()


adminauthRoutes.post('/login',adminLogin)

adminauthRoutes.get('/admin-details/:id',getAdminDetails)
module.exports={adminauthRoutes}