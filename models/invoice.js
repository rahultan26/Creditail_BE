const mongoose = require("mongoose");
const invoiceSchema = new mongoose.Schema({
  Brand: {
    type: String,
    required: true,
  },
  SalesRepId: {
    type: String,
  },
  SalesmanName: {
    type: String,
  },
  InvoiceAmount: {
    type: Number,
  },
  RetailerId: {
    type: String,
  },
  RetailerName: {
    type: String,
  },
  RetailerPhNo: {
    type: Number,
  },
  InvoiceDate: {
    type: String,
  },
  BillNo: {
    type: String,
  },
  PendingAmount: {
    type: Number,
  },
  CollectionDate: {
    type: String,
  },
});

module.exports = mongoose.model("Invoice", invoiceSchema);
