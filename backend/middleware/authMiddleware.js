const jwt = require("jsonwebtoken");
const verifyToken = (req, res, next) => {
  console.log(req.headers);
  // const token = req.headers["authorization"]?.split(" ")[1];
  const token = req.headers["authorization"];
  console.log(token);

  // p = token.slice(8);
  // console.log(token.substring(7));
  if (!token) return res.status(403).send("Access denied.");

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).send("Invalid token.");
  }
};

module.exports = verifyToken;
