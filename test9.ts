// This program converts a temperature in Fahrenheit to Celsius.

// Prompt the user to enter a temperature in Fahrenheit.
const _fahrenheit: string = prompt("Enter a temperature in Fahrenheit:");

// Convert the Fahrenheit temperature to Celsius.
const celsius: number = (parseFloat(_fahrenheit) - 32) * (5 / 9);

// Print the converted temperature in Celsius.
console.log(`The temperature ${_fahrenheit}°F is equivalent to ${celsius.toFixed(2)}°C.`);
