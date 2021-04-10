const axios = require("axios");

if (process.env.NODE_ENV !== "prod") {
  require("dotenv").config();
}

const getIdToken = async (uid, admin) => {
  const customToken = await admin.auth().createCustomToken(uid);
  const data = {
    token: customToken,
    returnSecureToken: true,
  };
  const url = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyCustomToken?key=${process.env.GOOGLE_API_KEY}`;
  const options = {
    method: "POST",
    headers: { "content-type": "application/json" },
    data: JSON.stringify(data),
    url,
  };
  const res = await axios(options);
  console.log(`IDTOKEN: ${res.data.idToken}`);
  return res.data.idToken;
};

test("auth unit test", async () => {
  // eslint-disable-next-line global-require
  const admin = require("firebase-admin");

  admin.initializeApp({
    credential: admin.credential.applicationDefault(),
  });

  const testToken = await getIdToken("aZa2bYjc7Rav1Karp4pqlb2J5pK2", admin);
  console.log(`TESTTOKEN: ${testToken}`);
  const ticket = await admin.auth().verifyIdToken(testToken);
  expect(ticket.email).toBe("test@test.com");
});
