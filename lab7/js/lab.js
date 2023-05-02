// index.js - write functions that take user input and manipulate a string.
// Author: Christina Li
// Date: May 2 2023

let userName = window.prompt("Enter your name so I can put it in alphabetical order.");
console.log ("userName =", userName);

// user function sorts a username into alphabetical order
function sortUser() {
  // convert lettes to lowercase
  userName = userName.toLowerCase();
  // gets rid of spaces
  userName = userName.replaceAll("\\s","")
  // split string to array
  let nameArray = userName.split('');
  console.log ("nameArray =", nameArray)
  // sort the array
  let nameArraySort = nameArray.sort();
  console.log ("nameArraySort =", nameArraySort);
  // join array back into a string
  let nameSorted = nameArraySort.join('');
  console.log ("nameSorted =", nameSorted);

  return nameSorted;
}

function createAnagram(){
  let user = sortUser();

  const anaArr = user.split('');
  const shuffleArr = anaArr.sort(() => 0.5 - Math.random()); // shuffles letters


  let combineAnagram = shuffleArr.join('');
  console.log("combineAnagram = ", combineAnagram);

  const firstLetter = combineAnagram.charAt(0).toUpperCase(); // makes the first letter capital
  let remainingLetters = combineAnagram.slice(1); // get every letter beginning at index 1 (not 0)

  finalAnagram = firstLetter + remainingLetters; // combine the first letter and the remaining letters

  return finalAnagram; // returns the final name

}

// output
document.writeln("Your name is sorted in alphabetical order: ", sortUser(), "</br>");
document.writeln("Anagram Name: ", createAnagram(), "</br>");
