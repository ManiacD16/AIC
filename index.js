const express = require("express");
const totalSupplyHandler = require("./api/total");
const circulatingSupplyHandler = require("./api/circulating");

const app = express();
const PORT = process.env.PORT || 5000;

// Route for total supply
app.get("/api/total-supply", totalSupplyHandler);

// Route for circulating supply
app.get("/api/circulating-supply", circulatingSupplyHandler);

// Export the app for Vercel to use
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

module.exports = app;
