const express = require("express");
const db = require("./config/db");
const bp = require("body-parser");
const Invoices = require("./routes/invoices");
const app = express();
const cors = require("cors");
db();
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
app.use("/invoices", Invoices());
module.exports = app;
// {
//     "Brand": "CADB",
//     "SalesRepId": "SLV20171",
//     "SalesmanName": "RENUKA S",
//     "InvoiceAmount": 726,
//     "RetailerId": "S170",
//     "RetailerName": "MAKAM RICE TRADERS",
//     "RetailerPhNo": 9880537249,
//     "InvoiceDate": "23/02/2022",
//     "BillNo":"CAD21102914",
//     "PendingAmount": 726,
//     "CollectionDate": "3/1/23"
//   }
