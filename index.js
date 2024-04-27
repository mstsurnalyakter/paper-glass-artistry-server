const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5001;

// middleware
app.use(cors());
app.use(express.json());



app.get("/", (req, res) => {
  res.send("Welcome to Home Route!");
});

app.listen(port, () => {
  console.log(`Server is running at: http://localhost:${port}`);
});
