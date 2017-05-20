// Code here handles what happens when a user submits a new character on the form.
// Effectively it takes the form inputs then sends it to the server to save in the DB.
console.log("loading create.js");
// when user clicks add-btn
$("#start").on("click", function(event) {
  event.preventDefault();
console.log("running create.js");
  // make a newCharacter obj
  var newShip = {
    // shipname from shipname input
    shipname: $("#username").val().trim(),
    health: Math.floor(Math.random() * (100 - 1 + 1)) + 1,
    railgun: Math.floor(Math.random() * (100 - 1 + 1)) + 1,
    scanner: Math.floor(Math.random() * (100 - 1 + 1)) + 1,
    crew: Math.floor(Math.random() * (10 - 1 + 1)) + 1,
    location: "1A"
  };

  // send an AJAX POST-request with jQuery
  $.post("/api/new", newShip)
    // on success, run this callback
    .done(function(data) {
      // log the data we found
      console.log(data);
      // tell the user we're adding a character with an alert window
      alert("Firing up Boosters...");
    });

  // empty each input box by replacing the value with an empty string
  $("#shipname").val("");
});
