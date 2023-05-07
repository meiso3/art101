// index.js - Experiment with anonymous functions and callbacks.
// Author: Christina Li
// Date: May 4 2023

// number array
numArray = [69, 973, 267, 270, 324, 34, 9];
console.log("My number array: ", numArray);

// named function for addition
function addition(x){
  var results = x + x;
  return results;
}

// console.log tests for simple addition
console.log(addition(5));
console.log(addition(69));

// adding the number array by itself
var mapResult = numArray.map(addition)
// should return [138, 1946, 534, 540, 648, 68, 18]
console.log("The sum of the array numbers adding itself: ", mapResult);

// anon function for subtraction
var subResult = numArray.map(function(x){
  return x - 69;
})
// should return [0, 904, 198, 201, 255, -35, -60]
console.log("The difference of the number array subtracting from 69: ", subResult);

// Get the reference to the output div element
var outputEl = document.getElementById("output");

// Define your combinedResults variable
var combinedResults = "Original Array: [" + numArray +
                     "]<br>Adding x to itself Array: [" + mapResult +
                     "]<br>Subtracting 69 Array: [" + subResult +
                     "]";

// Update the content of the output div
outputEl.innerHTML = combinedResults;