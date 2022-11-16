require('dotenv').config()
let express = require('express');
let app = express();

console.log("Hello World")

app.get('/', (req, res) => {
  filePath = __dirname + '/views/index.html'
  res.sendFile(filePath)
});




























 module.exports = app;
