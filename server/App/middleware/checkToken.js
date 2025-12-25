const jwt = require("jsonwebtoken");

let checkToken = (req, res, next) => {
   
    try {
         let token = req.headers['authorization'].split(' ')[1];
        var decoded = jwt.verify(token, process.env.TOKENKEY); //{ _id: '6943df90f43a22b54f54f588', iat: 1766487562 }
        req.body.userId = decoded._id;
        next();
    } catch (err) {
        return res.status(401).json({
            success: false,
            message: "Invalid Token",
        });
    }
    
    
}

module.exports = { checkToken };