// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Star Wars Characters (DATA)
// =============================================================
var currentTables = [
  {
    name: "Yoda",
    phone: "1-800-JEDI",
    email: "radIam@gmail.com",
    uniqueID: 2000
  },
  {
    name: "Darth Maul",
    phone: "1-666-666-6666",
    email: "redface@evil.com",
    uniqueID: 1200
  },
  {
    name: "Obi Wan Kenobi",
    phone: "1-123-543-0000",
    email: "mcGregor@me.com",
    uniqueID: 1350
  }
];

var waitlist = [
{
  name: "Darth John",
  phone: "1-NO-JEDI",
  email: "toobadsosad@gmail.com",
  uniqueID: 2002
},
];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/home", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

// Displays current reservations
app.get("/api/tables", function(req, res) {
  return res.json(tables);
});

// Displays current waitlist
app.get("/api/waitlist", function(req, res) {
  return res.json(waitlist);
});

// Displays a single character, or returns false
app.get("/api/tables/:more", function(req, res) {
  var myRez = req.params.more;

  console.log(myRez);

  for (var i = 0; i < currentTables.length; i++) {
    if (myRez === currentTables[i].uniqueID) {
      return res.json(currentTables[i]);
    }
  }

  return res.json(false);
});

// Create New Characters - takes in JSON input
app.post("/api/tables", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newTable = req.body;

  // Using a RegEx Pattern to remove spaces from newTable
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newTable.uniqueID = newTable.name.replace(/\s+/g, "").toLowerCase();

  console.log(newTable);

  currentTables.push(newTable);

  res.json(newTable);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
