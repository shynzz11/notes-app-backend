const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    const token = req.header("Authorization");

    if (!token) {
        return res.status(401).json({ message: "Access Denied. No token provided." });
    }

    try {
        const cleanToken = token.replace("Bearer ", "");

        const decoded = jwt.verify(cleanToken, process.env.JWT_SECRET);

        req.user = decoded;
        
        next(); 
    } catch (error) {
        res.status(403).json({ message: "Invalid token. Access denied." });
    }
};

module.exports = authMiddleware;
