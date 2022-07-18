const express = require("express");
const mongoose = require("mongoose");

const Songs = require("../models/Songs");

const router = express.Router();

router.post("/add-song", async (req, res) => {
  try {
    const { Songname,CoverImg,DOR,Singers,avg_rating,total_rating, rating_count } = req.body;
    const post = new Songs({Songname,CoverImg,DOR,Singers,avg_rating,total_rating, rating_count});

    Songs.DOR instanceof Date;

    const add = await post.save();

    if (!add) {
      return res.status(500).json({ message: "Server error!" });
    }
    else{
      res.status(200).json({ message: "Song Uploaded!", add });
    }
  
  } catch (err) {
    console.log(err);
    res.status(400).json({message:"error is :", err});
  }
});

module.exports = router;


