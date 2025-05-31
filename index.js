require('dotenv').config();
const express = require('express');
const cors = require('cors');
const twilio = require('twilio');
const axios = require('axios');

const app = express();
const port =  3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));



const accountSid = "";
const authToken = "";
const client = require("twilio")(accountSid, authToken);

client.calls.create({
  url: "http://demo.twilio.com/docs/voice.xml",
  to: "‪+918010710484‬",
  from: "‪+12525943512‬",
})
.then(call => console.log(call.sid));



app.listen(port, () => {
    console.log(Server is running on ${port});
});