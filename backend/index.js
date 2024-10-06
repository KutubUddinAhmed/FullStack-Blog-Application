const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const registerRouter = require("./routes/router.js");

require("dotenv").config();
require("./models/db.js");

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("hello");
});

app.use(bodyParser.json());
app.use(cors());

// Routes
app.use(registerRouter);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
