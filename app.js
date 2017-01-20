// Problem: We need a simple way to look at a user's badge count and JavaScript points on TTH

var https = require("https");

var username = "nicolaihowells";

// Solution: Use node.js to connect to Treehouse's API to get profile information to print out

function printMessage(username, badgeCount, points) {
 var message = username + " has " + badgeCount + " total badge(s) and " + points + " points in JavaScript";
 console.log(message);
}

// Connect to the API url (http://teamtreehouse.com/username.json)

var request = https.get("https://teamtreehouse.com/" + username + ".json", function(response){
 console.log(response.statusCode);
});

// Read the data
// Parse the data
// Print the data

request.on("error", function(error) {
 console.error(error.message);
});