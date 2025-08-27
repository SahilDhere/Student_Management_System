const jwt = require('jsonwebtoken');

const authenticate = async(req, res, next)=>{
    try {

        const token = req.headers.authorization?.split(" ")[1];
        if(!token){
            return res.status(401).json({success:false,message:"No Token Provided"})
        }

        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded;

        next();
        
    } catch (error) {
        return res.status(401).json({success:false, message:"Invalid Token",error:error.message})
    }
}

module.exports = authenticate;