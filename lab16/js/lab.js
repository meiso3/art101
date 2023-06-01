// index.js - Working with your partner, experiment with processing JSON from an API.
// Author: Christina Li
// Date: June 1 2023

// "https://api.nasa.gov/planetary/apod?api_key=KheLziIIVaw5qZSrvPYLbIQXuGi9KO0MrYKa3o4F"

// make sure JavaScript code runs only after the DOM has finished loading.
$(document).ready(function() {
  // Prompt the user for input
  var userDate = prompt("Enter a date (YYYY-MM-DD) to see the NASA picture of the day:");

  // Validate the user input using Moment.js
  var isValidDate = moment(userDate, "YYYY-MM-DD", true).isValid();

  if (!isValidDate) {
    console.log("Invalid date format. Using the current date instead.");
    userDate = moment().format("YYYY-MM-DD");
    $("#output").append("<h2>Since an invalid date was given, here is today's photo: </h2>");
  }

  // Using the core $.ajax() method
  $.ajax({
    // The URL for the request (from the API docs)
    url: "https://api.nasa.gov/planetary/apod?api_key=KheLziIIVaw5qZSrvPYLbIQXuGi9KO0MrYKa3o4F",
    // The data to send (will be converted to a query string)
    data: { 
      date: userDate // Use the user's input as the date parameter
    },
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType: "json",
    // What do we do when the API call is successful
    // All the action goes in here
    success: function(data) {
      // do stuff
      nasaObj = data;
      nasaImgUrl = data.hdurl;
      nasaDate = data.date;
      nasaExplain = data.explanation;

      console.log(data.date);
      console.log(data.explanation);
      if (isValidDate){
        $("#output").append("<h2>Your Picture of The Day</h2>"); // so that this is appended only if the date given was valid
      }
      $("#output").append("<h2>" + nasaDate + "</h2>");
      $("#output").append("<p>" + nasaExplain + "</p>");
      $("#output").append("<img src='" + nasaImgUrl + "'>");
    },
    // What we do if the API call fails
    error: function(jqXHR, textStatus, errorThrown) { 
      // do stuff
      console.log("Error:", textStatus, errorThrown);
    }
  });

});