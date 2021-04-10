const { verifyToken } = require("../../services/auth");

const isAuthenticated = async (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ error: "Unauthorized!" });
  }
  try {
    const user = await verifyToken(req.headers.authorization);
    if (!user) {
      return res.status(401).json({ error: "Unable to authorize token;" });
    }
    req.user = user;
    return next();
  } catch (e) {
    console.log(`[AUTH] Error verifying token: \n ${JSON.stringify(e)}`);
    return res.status(504).send("Error parsing JWT");
  }
};

module.exports = {
  isAuthenticated,
};
