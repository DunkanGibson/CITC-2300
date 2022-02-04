function calculate() {
var num1 = document.getElementById("num1").value;
var num2 = document.getElementById("num2").value;
var total = parseInt(num1) + parseInt(num2);
var output = "The total is " + total;
document.getElementById("output").innerHTML = output;
}
document.getElementById("calc").addEventListener("click", calculate, false);