const express = require("express");
const Port = 8000;
const db = require("./connect");
const routes = require("./router/routes");
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: "false" }));
app.use('/',routes)
app.use('/', require('./router/addSong'));
app.use('/', require('./router/addArtist'));
app.get("/", (req, res) => {
  res.send("hello Saurabh");
});


// app.post("/student", (req, res) => {
//   res.send("hello ");
// });
app.listen(Port, () => {
  console.log(`connection is setup at ${Port}`);
});
