const jwt = require('jsonwebtoken');
const {SECRET_KEY} = require('../../config/serverConfig')

const authenticateToken = (req,res,next)=>{
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(!token)return res.sendStatus(403);
        jwt.verify(token, SECRET_KEY, (err, user) => {
            if (err) return res.sendStatus(403);

            req.user = user;
            next();
    });
}

const authorizeRoles = (...allowedRoles)=>{
    return(req,res,next)=>{
        userRole = req.user.role;
        if(!allowedRoles.includes(userRole))
            return res.status(403).json({message:"Access Denied"});
        next();
    }
}

module.exports={authenticateToken,authorizeRoles}