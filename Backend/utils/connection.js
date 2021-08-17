const { MongoClient } = require("mongodb");
require("dotenv").config();

const URI = process.env.URI;

const client = new MongoClient(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect((err) => {
  if (err) {
    if (err) {
      console.log(err);
    }
  }

  console.log("db connected");
});

module.exports = client;
