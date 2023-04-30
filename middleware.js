const jwt = require('jsonwebtoken')

module.exports = function (req,res,next) {
    try{
        let token = req.header('x-token');

        if(!token){
            console.log("token not found")
           return res.send("Token Not Found")
        }

       let decode =  jwt.verify(token,"MyKey")

       req.user = decode.user
       next()
    }
    catch(err){
        console.log(err)
        return res.send("Invalid Token")
    }
}