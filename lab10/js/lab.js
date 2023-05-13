// index.js - Working with your partner, experiment with JS events.
// Author: Christina Li
// Date: May 11 2023

// Constants

// Functions

// This function sortUserName is a function that takes user input and sorts the letters of their name. 
// Credit: Professor Modes
function sortUserName(userName) {
  return userName.toLowerCase().split("").sort().join("");
}

// finds the button element
var button = document.getElementById("my-button");
// adds the event
button.addEventListener("click", function(){
  // records the name input
  var inputEl = document.getElementById("user-name");
  var value = inputEl.value
  // uses the functionn to sort the input
  value = sortUserName(value);

  // creates a new varaible
  var newEl = document.createElement("p");
  // replaces the input value with the new variable
  newEl.innerHTML = value;
  // appends it
  document.getElementById("output").appendChild(newEl);
});

// this is task bonus, I decided to make a new button that shows a picture on-click
let butt2 = document.getElementById("butt-pic");
// adds the event
butt2.addEventListener("click", function(){
  let popup = document.getElementById("popup");
  let image = document.createElement("img");

  // image source
  image.src = "../lab10/img/cute.jpg";

  popup.appendChild(image);

  // displays the popup image
  popup.style.display = "block";

  // disables the button after first click
  butt2.disabled = true;
});

window.onclick = function(event){
  if (event.target !== butt2 && !popup.contains(event.target)){
      // Remove the image element from the popup
      let image = popup.querySelector("img");
      if (image) {
          image.remove();
      }

      // Hide the popup
      popup.style.display = "none";

      // Enable the button again
      butt2.disabled = false;
  }
};