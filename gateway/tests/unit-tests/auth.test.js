const axios = require("axios");

if (process.env.NODE_ENV !== "prod") {
  require("dotenv").config();
}
const { verifyToken, getAdmin } = require("../../services/auth");

const getIdToken = async (uid) => {
  const admin = getAdmin();
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

  const testToken = await getIdToken("aZa2bYjc7Rav1Karp4pqlb2J5pK2");
  console.log(`TESTTOKEN: ${testToken}`);
  const user = await verifyToken(testToken);
  expect(user.email).toBe("test@test.com");
});
