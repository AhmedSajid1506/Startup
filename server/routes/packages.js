const express = require("express");
const Packages = require("../models/Packages");
const router = express.Router();

// ROUTE: 7; Get product by tags for search using GET "/api/v1/product/search/:key".
router.get("/:mctg/:ctg", async (req, res) => {
  try {
    console.log("done", req.params.mctg, req.params.ctg);
    const packages = await Packages.find(req.id);
    res.json(packages);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
