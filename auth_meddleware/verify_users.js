
const jwt = require('jsonwebtoken');
module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, "USER");
        req.userData = decoded;
        next();
    } catch (error) {
        return res.status(401).json({
            message: 'Auth failed for user'
        });
    }
};



/* const jwt = require('jsonwebtoken');
// after make authentication 
// here we use next to verify after login or siginup to make authorizatio
module.exports=async(req,res,next)=>{
    try {
        // we recive token jwt from header
    //authorization token can it array -- should be split it
    const token = req.headers.authorization.split("")[1];
    // after must be decode jwt to verify token if token = secretkey = "USER" --> user else admin
    const decodeed = jwt.verify(token,"USER");
    req.userData = decodeed;
    // hear we next after verify meddlewear 
    next();
        
    } catch (error) {
        return res.json({
            message:"auth for user is error"
        });
        
    }

} */