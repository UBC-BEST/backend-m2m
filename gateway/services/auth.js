const admin = require("firebase-admin");

const creds = Buffer.from(process.env.GOOGLE_APPLICATION_CREDENTIALS, "base64");

admin.initializeApp({
  credential: admin.credential.cert(JSON.parse(creds)),
});

const getAdmin = () => admin;

const verifyToken = async (authToken) => {
  try {
    const ticket = await getAdmin().auth().verifyIdToken(authToken);
    console.log(`[FIREBASE] Verified user successfully.`);
    return { id: ticket.uid, name: ticket.name, email: ticket.email };
  } catch (e) {
    console.log(`[FIREBASE] Error retrieving token for user \n ${e}`);
    return null;
  }
};

module.exports = {
  verifyToken,
  getAdmin,
};
