const axios = require("axios");

// logic for generating token
const createToken = async (req, res, next) => {
  const secret = "";
  const consumer = "";

  await axios.get(
    "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials"
  );
};

module.exports = { createToken };
