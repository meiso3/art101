var buttonEl = document.getElementById("my-button");

buttonEl.addEventListener("click", function(){
    var name = window.prompt("Write your name: ");
    var nameStr = "Hello " + name
    var helloEl = document.getElementById("hello");
    helloEl.innerHTML = nameStr;
})

function sortMe(str) {
    return str.split('').sort().join('');
}

var button2El = document.getElementById("button");
button2El.addEventListener("click", function(){
    var inputEl = document.getElementById("my-field");
    var value = inputEl.value;
    console.log(value);
    var newEl = document.createElement("p");
    newEl.innerHTML = value;
    document.getElementById("output").appendChild(newEl);
})
