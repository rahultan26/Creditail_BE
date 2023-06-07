const Invoice = require("../models/invoice");
const express = require("express");
const mongoose = require("mongoose");
const invoices = function () {
  const invoicesRouter = express.Router();
  try {
    invoicesRouter.get(`/`, async (req, res) => {
      const invoiceList = await Invoice.find(); // finding all invoice in the collection is
      // done by passing no arguents in find()
      console.log(invoiceList);
      if (!invoiceList) {
        res.status(500).json({ success: false });
      }
      res.status(200).send(invoiceList);
    });

    invoicesRouter.route("/").post(async (req, res) => {
      console.log(req.body.Brand);
      const invoice = new Invoice(req.body);
      await invoice.save();

      if (!invoice)
        return res.status(400).send("the invoice cannot be created!");

      res.send(invoice);
    });

    invoicesRouter.route("/:id").put(async (req, res) => {
      const invoice = await Invoice.findByIdAndUpdate(req.params.id, {
        Brand: req.body.Brand,
        Sales: req.body.Sales,
        RepId: req.body.RepId,
        SalesmanName: req.body.SalesmanName,
        InvoiceAmount: req.body.InvoiceAmount,
        RetailerId: req.body.RetailerId,
        RetailerName: req.body.RetailerName,
        RetailerPhno: req.body.RetailerPhno,
        InvoiceDate: req.body.InvoiceDate,
        BillNo: req.body.BillNo,
        PendingAmount: req.body.PendingAmount,
        CollectionDate: req.body.CollectionDate,
      });
      if (invoice) res.send(invoice);
    });
  } catch (error) {
    console.log("invoice error");
  }
  return invoicesRouter;
};
module.exports = invoices;
