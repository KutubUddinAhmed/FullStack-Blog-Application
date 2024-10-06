const mongoose = require("mongoose");

const mongo_uri = process.env.MONGODB_URI;

mongoose
  .connect(mongo_uri)
  .then(() => {
    console.log("MongoDB Connected Succesfully");
  })
  .catch((err) => {
    console.log("MonogoDB Connection Error", err);
  });
