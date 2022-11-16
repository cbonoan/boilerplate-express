require('dotenv').config()
let bodyParser = require('body-parser');
let express = require('express');
let app = express();

console.log("Hello World");

app.use("/public", express.static(__dirname + "/public"));

// Middleware that runs on all endpoint calls
app.use("/", (req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

// Body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  filePath = __dirname + '/views/index.html'
  res.sendFile(filePath)
});

app.get('/json', (req, res) => {
  let message = "Hello json";
  if (process.env.MESSAGE_STYLE === "uppercase") {
    message = message.toUpperCase()
  }
  res.json({
    "message": message
  })
});

// Mounted middleware
app.get('/now', (req, res, next) => {
  req.time = new Date().toString();
  next();
}, (req, res) => {
  res.json({
    "time": req.time
  });
});

// Getting params from route
app.get('/:word/echo', (req, res) => {
  res.json({
    "echo": req.params.word
  });
});

// app.get('/name', (req, res) => {
//   res.json({
//     "name": `${req.body.first} ${req.body.last}`
//   });
// })

// app.post("/name", function(req, res) {
//   // Handle the data in the request
//   var string = req.body.first + " " + req.body.last;
//   res.json({ name: string });
// });

app.route('/name')
  .get((req, res) => {
    res.json({
      "name": `${req.query.first} ${req.query.last}`
    });
  })
  .post((req, res) => {
    res.json({
      "name": `${req.body.first} ${req.body.last}`
    });
  });

 module.exports = app;