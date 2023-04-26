// This program converts a temperature in Fahrenheit to Celsius.
// Prompt the user to enter a temperature in Fahrenheit.
var _fahrenheit = prompt("Enter a temperature in Fahrenheit:");
// Convert the Fahrenheit temperature to Celsius.
var celsius = (parseFloat(_fahrenheit) - 32) * (5 / 9);
// Print the converted temperature in Celsius.
console.log("The temperature ".concat(_fahrenheit, "\u00B0F is equivalent to ").concat(celsius.toFixed(2), "\u00B0C."));
