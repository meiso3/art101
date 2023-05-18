// index.js - Working with your partner, experiment with jQuery
// Author: Christina Li
// Date: May 17 2023

$("#challenge").append("<button id='button1'>What does this button do?</button>"); //used prepend instead of append
$("#problems").append("<button id='button2'>What does this button do?</button>");
$("#output").append("<button id='button3'>What does this button do?</button>");

$("#button1").click(function(){
  var color = $(this).css("background-color");
  if (color === "rgb(255, 255, 255)") {
    $(this).css("background-color", "red");
  } else {
    $(this).css("background-color", "rgb(255, 255, 255)");
  }
});

$("#button2").click(function(){
  var color = $(this).css("background-color");
  if (color === "rgb(255, 255, 255)") {
    $(this).css("background-color", "orange");
  } else {
    $(this).css("background-color", "rgb(255, 255, 255)");
  }
});

$("#button3").click(function(){
  var color = $(this).css("background-color");
  if (color === "rgb(255, 255, 255)") {
    $(this).css("background-color", "yellow");
  } else {
    $(this).css("background-color", "rgb(255, 255, 255)");
  }
});
