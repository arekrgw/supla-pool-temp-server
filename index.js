const express = require("express");
const bodyParser = require("body-parser")
const fs = require('fs')

const app = express();

const basePathToFile = "/home/pi/pool/"

app.use(bodyParser.json());

app.post("/", (req, res) => {
  fs.writeFileSync(pathToFile+"tempIN", req.body.temperature);
  fs.writeFileSync(pathToFile + "lastupdate", new Date());
  res.send("ok").status(200);
})


app.listen(4545, () => {
  console.log("Server is up");
})