const admin = require("firebase-admin");

let creds = process.env.GOOGLE_APPLICATION_CREDENTIALS;
if (!creds || creds === "") {
  console.log(`Google Credentials Not found`);
}

creds = JSON.parse(Buffer.from(creds, "base64"));

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
