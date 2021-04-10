const admin = require("firebase-admin");

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
});

const isAuthenticated = async (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ error: "Unauthorized!" });
  }
  try {
    const ticket = await admin.auth().verifyIdToken(req.headers.authorization);
    req.user = { id: ticket.uid, name: ticket.name, email: ticket.email };
    return next();
  } catch (e) {
    console.log(`[AUTH] Error verifying token: \n ${JSON.stringify(e)}`);
    return res.status(401).json({ error: `Unable to authorize headers; ${e}` });
  }
};

module.exports = {
  isAuthenticated,
};
