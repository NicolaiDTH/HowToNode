// Problem: We need a simple way to look at a user's badge count and JavaScript points on TTH

var https = require("https");

var username = "nicolaihowells789";

// Solution: Use node.js to connect to Treehouse's API to get profile information to print out

// Print out message

function printMessage(username, badgeCount, points) {
 var message = username + " has " + badgeCount + " total badge(s) and " + points + " points in JavaScript";
 console.log(message);
}

// Print out error messages

function printError(error) {
 console.error(error.message);
}

// Connect to the API url (http://teamtreehouse.com/username.json)

var request = https.get("https://teamtreehouse.com/" + username + ".json", function(response){
 var body = "";

// Read the data

 response.on('data', function(chunk) {
  body += chunk;
 });

// Parse the data
// Print the data

 response.on('end', function() {
  if (response.statusCode === 200) {
   try {
   var profile = JSON.parse(body);
   printMessage(username, profile.badges.length, profile.points.JavaScript)
   } catch(error) {
    // Parse Error
    printError(error);
   }
  } else {
   // Status code error
   printError({message: "There was an error getting the profile for " + username + ". (" + response.statusCode + ")"});
  }
 });

});

// Connection Error
request.on("error", printError);