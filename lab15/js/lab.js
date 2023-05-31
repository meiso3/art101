// index.js - Working with your partner, experiment with jQuery and AJAX.
// Author: Christina Li
// Date: May 30 2023

function getStuff() {
	console.log("Clicked!");
  $.ajax({
    url: "https://pokeapi.co/api/v2/location/73",
    type: "GET",
    data: {},
  })
  .done(function(data) {
 		// console.log(data);
    let area = (data.names[1].name);
    let region = (data.region.name);
    $("#output").html("We are in the region of " + region + " where " + area + " lies. ");
  })
}

$("button").click(getStuff);


