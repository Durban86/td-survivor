const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
const db = admin.firestore();

// Submit pick
exports.submitPick = functions.https.onCall(async (data) => {
    const { uid, week, player, team } = data;
    await db.collection("picks").doc(`${uid}_week${week}`).set({
        uid,
        week,
        player,
        team,
        tdScored: false,
        timestamp: new Date().toISOString()
    });
    await db.collection("users").doc(uid).update({
        usedPlayers: admin.firestore.FieldValue.arrayUnion(player)
    });
    return { message: "Pick submitted." };
});

// Confirm touchdown
exports.confirmTD = functions.https.onCall(async (data) => {
    const { uid, week } = data;
    await db.collection("picks").doc(`${uid}_week${week}`).update({ tdScored: true });
    await db.collection("users").doc(uid).update({
        streak: admin.firestore.FieldValue.increment(1)
    });
    return { message: "Touchdown confirmed." };
});

// Eliminate player
exports.eliminateUser = functions.https.onCall(async (data) => {
    const { uid } = data;
    await db.collection("users").doc(uid).update({ status: "eliminated" });
    return { message: "User eliminated." };
});