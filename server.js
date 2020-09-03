const express = require("express");

const cors = require("cors");
// used to parse the request
const bodyParser = require("body-parser");
// native path module by node
const path = require("path");

// this is for creating .env file in production and it will config
if (process.env.NODE_ENV !== "production") require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// instaintiate express
const app = express();

const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.js"));
  });
}

app.listen(port, function (error) {
  if (error) throw error;
  console.log("server is running on : " + port);
});

app.post("/payment", (req, res) => {
  // console.log("request :",req);
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "INR",
  };
  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({error: stripeErr});
    } else {
      res.status(200).send({success: stripeRes});
    }
  });
});
