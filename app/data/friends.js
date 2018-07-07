 
 
 
 
 
 
 $("#search-btn").on("click", function() {
      var searchedTable = $("#table-search").val().trim();

      // Using a RegEx Pattern to remove spaces from searchedCharacter
      // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
      searchedTable = searchedTable.replace(/\s+/g, "").toLowerCase();

      $.get("/tables" + searchedTable, function(data) {
        console.log(data);
        if (data) {
          $("#stats").show();
          $("#name").text(data.name);
          $("#phone").text(data.phone);
          $("#email").text(data.email);
          $("#uniqueID").text(data.uniqueID);
        }
        else {
          $("#name").text("Your table was not found.");
          $("#stats").hide();
        }
      });
    });

// Creates new reservation
$("#add-btn").on("click", function(event) {
    event.preventDefault();
    var newTable = {
        name: $("#name").val().trim(),
        phone: $("#phone").val().trim(),
        email: $("#email").val().trim(),
        uniqueID: $("#uniqueID").val().trim()
    };

    // Adds new table to reservationList

    $.post("/api/tables", newTable)
        .then(function(data) {
        console.log("add.html", data);
        alert("Reserving Table...");
        });
    });