const TopSong = require("../controller/TopSongList");
const router = require("express").Router();

router.get('/get', (req, res)=>{
    res.status(200).send('data send');
});

module.exports=router;