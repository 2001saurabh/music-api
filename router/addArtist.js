const express = require("express");
const mongoose = require("mongoose");

const Artist = require("../models/Artist");

const router = express.Router();

router.post("/add-artist", async (req, res) => {
  try {
    const {Name,Bio,DOB,Songs } = req.body;
    const post = new Artist({Name,Bio,DOB,Songs});

    Artist.DOB instanceof Date;

    const add = await post.save();

    if (!add) {
      return res.status(500).json({ message: "Server error!" });
    }
    else{
      res.status(200).json({ message: "Artist added!", add });
    }
  
  } catch (err) {
    console.log(err);
    res.status(400).json({message:"error is :", err});
  }
});

module.exports = router;


