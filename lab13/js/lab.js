// index.js - purpose and description here
// Author: Christina Li
// Date: May 24 2023

// outputEl = document.getElementById("output");

function fizzBuzz(){
  // loop from start to end
    for (var i=1; i<200; i++) {
        str ="";
  
      if (i % 3 == 0) {
        str += "Fizz";
      }
      // if a multiple of 5, print buzz
      if (i % 5 == 0) {
        str += "Buzz";
      }
      if (i % 7 == 0) {
        str += "Boom";
      }
      if (str == ""){
          str = i;
      }
      // else print number
      $("#output").append("<div>" + str + "!");
  
    }
  }
  
  $(document).ready(function() { // executes after DOM has loaded
    $("#my-button").click(function() {
      fizzBuzz();
      $('#my-button').prop('disabled', true); // button can only be press once 
    });
  });