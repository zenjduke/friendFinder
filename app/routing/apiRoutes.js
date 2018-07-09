// ===============================================================================
// LOAD DATA
// Linked to Friends List
// ===============================================================================

var friendData = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests

  app.get("/api/friends", function(req, res) {
    console.log("test");
    res.json(friendData);
  });


  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the friendData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a friend or not.
    // It will do this by sending out the value "true" have a friend
    // req.body is available since we're using the body-parser middleware
    
      friendData.push(req.body);
      res.json(true);
  });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the friend while working with the functionality.
  // Don"t worry about it!

  app.post("/api/clear", function() {
    // Empty out the arrays of data
    friendData = [];

    console.log(friendData);
  });
};
