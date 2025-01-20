import admin from "firebase-admin";

const serviceAccount = require("../");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://<your-project-id>.firebaseio.com",
});

const firestore = admin.firestore();

export { firestore };
