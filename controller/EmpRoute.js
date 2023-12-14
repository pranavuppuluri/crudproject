const express = require("express");
const empSchema = require("../model/empSchema");
const EmpRoute = express.Router();
const mongoose = require("mongoose");

EmpRoute.post("/create-employees", (req, res) => {
  empSchema.create(req.body, (err, data) => {
    if (err) return err;
    else res.json(data);
  });
});

EmpRoute.get("/", (req, res) => {
  empSchema.find((err, data) => {
    if (err) return err;
    else res.json(data);
  });
});
EmpRoute.route("/update-employees/:id")
  .get((req, res) => {
    empSchema.findById(mongoose.Types.ObjectId(req.params.id), (err, data) => {
      if (err) return err;
      else res.json(data);
    });
  })
  .put((req, res) => {
    empSchema.findByIdAndUpdate(
      mongoose.Types.ObjectId(req.params.id),
      { $set: req.body },
      (err, data) => {
        if (err) return err;
        else res.json(data);
      }
    );
  });

EmpRoute.delete("/delete-employees/:id", (req, res) => {
  empSchema.findByIdAndRemove(
    mongoose.Types.ObjectId(req.params.id),
    (err, data) => {
      if (err) return err;
      else res.json(data);
    }
  );
});

module.exports = EmpRoute;
