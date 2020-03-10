const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

//routes and logic

router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    const hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burger", function(req, res) {
  burger.insertOne(
    {
      burger_name: req.body.burger_name
    },
    function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    }
  );
});
//http://localhost:8080/api/resturant_burger/1 

router.put("/api/burger/:id", function(req, res) {
  const condition = {id: req.params.id};

  burger.updateOne(
    {
      devoured: req.body.devoured
    },
    condition,
    function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
});

module.exports = router;
