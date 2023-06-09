const express = require("express");
const Packages = require("../models/Packages");
const router = express.Router();

// ROUTE: 1; Get package by url using GET "/api/v1/packages/:ctg".
router.get("/:ctg", async (req, res) => {
  try {
    const packages = await Packages.find({ctg: req.params.ctg});
    res.json(packages);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
