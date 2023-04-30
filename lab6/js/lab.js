// index.js - Experiment with JavaScript arrays and objects.
// Author: Christina Li
// Date: April 27 2023

// Define Variables
let myTransport = ["walk", "bus", "car"];

// Create an object for my car
let myMainRide = {
  make: "Mini",
  model: "Cooper S",
  color: "Tan",
  year: 2014,
  // define a function within the object that uses the value of year above (this.year)
  age: function() {
      return 2023 - this.year;
  }
}

// Output
document.writeln("These are my modes of transportation: " + myTransport + "</br>");
document.writeln("My car's details: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>");