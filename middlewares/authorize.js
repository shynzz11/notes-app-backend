const jwt = require('jsonwebtoken');

const authorize = (req, res, next) => {
    const token = req.header('auth-token');
    if(!token){
        return res.status(401).json({message: 'Access Denied'});
    }
    try {
        const decoded = jwt.verify(token, 'secretkey');
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).json({message: 'Invalid Token'});
    }
}

module.exports = authorize; 