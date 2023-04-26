// Store the locations in an array
let placesToVisit: string[] = ["Japan", "Brazil", "Egypt", "Canada", "Australia"];

// Print original array
console.log("Original order:", placesToVisit);

// Print array in alphabetical order
console.log("Alphabetical order:", [...placesToVisit].sort());

// Print original array again
console.log("Original order:", placesToVisit);

// Print array in reverse alphabetical order
console.log("Reverse alphabetical order:", [...placesToVisit].sort().reverse());

// Print original array again
console.log("Original order:", placesToVisit);

// Reverse the order of the array
placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);

// Reverse the order of the array again to restore the original order
placesToVisit.reverse();
console.log("Original order:", placesToVisit);

// Sort the array in alphabetical order
placesToVisit.sort();
console.log("Alphabetical order:", placesToVisit);

// Sort the array in reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Reverse alphabetical order:", placesToVisit);


