const functions = require('firebase-functions');
// Import and initialize the Firebase Admin SDK.
const admin = require('firebase-admin');
admin.initializeApp();

const { WebClient } = require('@slack/client');

const { token, conversationId } = require('./configs/slack');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

// An access token (from your Slack app or custom integration - xoxp, xoxb)
// const token = process.env.SLACK_TOKEN;

// const web = new WebClient(token);

// This argument can be a channel ID, a DM ID, a MPDM ID, or a group ID


const db = admin.firestore();

const setFeedback = async (json) => {
    // await db.collection("items").doc("latest").update(items);
    await db.collection("feedback").add(json);
}

const regionTokyo = 'asia-northeast1';
exports.feedback = functions.region(regionTokyo).https.onCall(async (data, context) => {
    const { text = "" } = data;

    // Checking attribute.
    if (!(typeof text === 'string') || text.length === 0) {
        // Throwing an HttpsError so that the client gets the error details.
        throw new functions.https.HttpsError('invalid-argument', 'The function must be called with ' +
            'one arguments "text" containing the message text to add.');
    }

    // // Authentication / user information is automatically added to the request.
    // const uid = context.auth.uid;
    // const name = context.auth.token.name || null;
    // const picture = context.auth.token.picture || null;
    // const email = context.auth.token.email || null;

    // IMPORTANT: Error by Firebase plan. because limit network by spark plan.
    // See: https://api.slack.com/methods/chat.postMessage
    // const res = await web.chat.postMessage({ channel: conversationId, text: 'Hello there from functions' });
    // `res` contains information about the posted message
    // console.log('Message sent: ', res.ts);

    // TODO replace db for a while.
    await setFeedback({text});

    return { text };
});