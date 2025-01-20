const jwt = require('jsonwebtoken');
require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET || "legallift$2026"


async function restrictToLoggedinUserOnly(req, res, next) {
    try {
        // console.log("jwt secret ",JWT_SECRET);
        if (!JWT_SECRET) {
            console.error("JWT_SECRET is not defined");
            return res.status(500).json({ error: 'Server configuration error' });
        }

        let token = req.header('Authorization');
        // console.log("Received token:", token);

        if (!token) return res.status(401).json({ error: 'No token provided.' });

        if (token.startsWith('Bearer ')) token = token.slice(7).trim();

        
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = { _id: decoded.id }; // Set req.user with _id field
         
        next();
    } catch (error) {
        console.error("Token verification error:", error);
        res.status(403).json({ error: 'Token verification failed.' });
    }
}

module.exports = {
    restrictToLoggedinUserOnly
};