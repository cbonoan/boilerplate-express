require('dotenv').config()
let express = require('express');
let app = express();
app.use("/public", express.static(__dirname + "/public"))

console.log("Hello World")

app.get('/', (req, res) => {
  filePath = __dirname + '/views/index.html'
  res.sendFile(filePath)
});

app.get('/json', (req, res) => {
  const message = "Hello json";
  if (process.env.MESSAGE_STYLE == "uppercase") {
    message.toUpperCase()
  }
  res.json({
    "message": message
  })
})








 module.exports = app;
