// index.js - experiment with DOM manipulation
// Author: Christina Li
// Date: May 10 2023

// finds output <div> and assigned it a new var
  outputEl = document.getElementById("output");

// created new <p>
  new1El = document.createElement("p");
// made it say something new
  new1El.innerHTML = "cool font alert!!!";

//created new <h1>
  new2El = document.createElement("h1");
// made it say something new
  new2El.innerHTML = "rainbow is cool!";

// appended the new elements separately to the output <div>
  outputEl.appendChild(new1El);
  outputEl.appendChild(new2El);

  console.log(outputEl);


// Functions


