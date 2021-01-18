const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51Hq2jUC7SEwfAz5JCfUmFjLP4iA7e9rMotD4d91sFGt3aq0i3cw4PtZMio4eJtQlodTgQYSKbPATVSZAQ2D8VqgK00ybcGnqMg');

//API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());


// - Api routes
app.get('/', (request, response) => response.status(200).send('hello world'));

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    
    console.log('Payment Request Recieved BOOM!!! >>> ', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "gbp",
    });

    //OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })


});

// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/clone-a17ca/us-central1/api



