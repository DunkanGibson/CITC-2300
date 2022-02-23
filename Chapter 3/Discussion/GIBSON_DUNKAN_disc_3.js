// This program uses an array to store a list of favorite car makes and then
// outputs the contents to an HTML page.

var cars = [];     // Array to hold car makes (Error 1: not an array)
var i = 0;         // Index

// The addCar() function will add a car from the textbox to the cars[] array.
// The array is output once it contains 4 entries.

function addCar() {
  if (i < 4) {
    cars[i] = input.value;
    input.value = "";
    i++;
    if (i === 4) {      // Error 2: assignment instead of comparison
      displayCars();
    }
  }
}
// The displayCars() function uses a for loop to loop through the cars[] array
// and output its contents to the <p> element with ID "output"
function displayCars() {
  // Reference the element with ID "output" for simpler code
  var output = document.getElementById("output");
  output.innerHTML += "Your list is: ";
  for (var j = 0; j < cars.length; j++) {   // Error 3: j should start at 0
    output.innerHTML += cars[j];
    if (j < cars.length - 1)
      output.innerHTML += ", ";
  }
}
// Backward compatible event listener
if (document.getElementById("submit").addEventListener) {
  document.getElementById("submit").addEventListener("click", addCar, false);
}
else if (document.getElementById("submit").attachEvent) {
  document.getElementById("submit").attachEvent("onclick", addCar);
}