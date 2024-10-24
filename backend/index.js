const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes/router.js");
const path = require("path");

require("dotenv").config();
require("./models/db.js");

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("hello");
});

app.use(bodyParser.json());
app.use(cors());

app.use("/uploads", express.static(path.join(__dirname, "uploads")));
// Routes
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
