const admin = require("firebase-admin");
const serviceAccount = require("./serviceKey.js");

let db;

try {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: "https://pokedex-d0d67-default-rtdb.europe-west1.firebasedatabase.app"
    });
    db = admin.firestore();
} catch (e) {
    console.log(e.message);
}

module.exports = { db };
