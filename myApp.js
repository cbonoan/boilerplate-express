let express = require('express');
let app = express();
app.use("/public", express.static(__dirname + "/public"))

console.log("Hello World")

app.get('/', (req, res) => {
  filePath = __dirname + '/views/index.html'
  res.sendFile(filePath)
});

app.get('/json', (req, res) => {
  res.json({
    "message": "Hello json"
  })
})








 module.exports = app;
