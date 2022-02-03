const request = require('request');

//Used to write script which request website server and fetch html code

// Expects -> link and callback function
request('https://www.pepcoding.com/', function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the website homepage.
});