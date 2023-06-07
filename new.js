const Invoice = require("./models/invoice");
const express = require("express");
const mongoose = require("mongoose");
const neww = function () {
  const invoicesRouter = express.Router();
  invoicesRouter.route("/").post((req, res) => {
    console.log(req.body.name);
    // const invoice = new Invoice(req.body);
    // await invoice.save();
    // if (!invoice) return res.status(400).send("the invoice cannot be created!");
    // res.send(invoice);
  });
  return invoicesRouter;
};
module.exports = neww;
