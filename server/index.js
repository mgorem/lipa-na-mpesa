const express = require("express");

const app = express();
const TokenRoute = require("./routes/token");

app.listen(5000, () => {
  console.log("Server Running Perfectly!");
});

app.get("/", (req, res) => {
  res.send("Mpesa integration in progress, time to get paid!");
});

app.use("/token", TokenRoute);
