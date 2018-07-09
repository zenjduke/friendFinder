// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

// Basic route that sends the user first to the AJAX Page
app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
  
  // Basic route that sends the user first to the AJAX Page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
  
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });
  
  // Displays current friends
  app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });

};
  