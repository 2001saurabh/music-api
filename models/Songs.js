const { Int32, Double} = require('bson');
const mongoose = require('mongoose');


const songSchema = mongoose.Schema({
    Songname:{
        type:String,
    },
    DOR:{
        type:Date,
    },
    Cover:{
        type:String,
    },
    total_rating:{
        type:Number,
        default:0,
    },
    rating_count:{
        type:Number,
        default:0,
    },
    avg_rating:{
        type:Number,
        default:0,
    },

    Singers:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"ARTIST",
        // required:true,

    }],

},{ timestamps: true })

module.exports = mongoose.model("SONG", songSchema);