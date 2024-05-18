const express = require("express");
const router = express.Router();
const pg = require("../Controllers/pgController");


// get all pgs
router.get("/get", pg.getAllPgs);
//create a new pg
router.post("/add",pg.addPg);
//update a pg
router.put("/update/:id", pg.updatePg);
//delete a pg
router.delete("/delete/:id", pg.deletePg);
//get pg by id
router.get("/get/:id", pg.getPgDetailsById);

module.exports = router;
