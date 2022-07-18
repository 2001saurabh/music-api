const mongoose = require("mongoose");


const artistSchema = new mongoose.Schema({
  Name: {
    type: String,
  },
  DOB: {
    type: Date,

  },
  Bio:{
    type:String,
  },
  Songs:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"SONG",
  
  }],
 
},{timestamps:true});

module.exports = mongoose.model("ARTIST", artistSchema);