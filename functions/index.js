const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")
('sk_test_51JM9yPSEop6uPciXinCXF8N9RCCD9Qec6u4rXNWZljJaFtjf9uAX9nJJCrTjiLZjACSUNyDBlgyClhxYCoH6h17v00L1MLdLxr')

//To Set Up An API:


//APP CONFIG
const app = express();


//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());


//API routes
app.get('/', (request, response) => response.status(200).send('hello world'));

app.post('/payments/create', async(request, response) => {
    const total = request.query.total;

    console.log('Payment Request Received BOOM!!! for this amount >>> ', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});


//Listen Command
exports.api = functions.https.onRequest(app)


//Example Endpoint
//http://localhost:5001/full-clone-699fe/us-central1/api


//Hence the above setup is needed to get the backend express app running on the cloud function.
//To make it running on our local host, we need to emulate it.

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
