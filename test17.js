var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Store the locations in an array
var placesToVisit = ["Japan", "Brazil", "Egypt", "Canada", "Australia"];
// Print original array
console.log("Original order:", placesToVisit);
// Print array in alphabetical order
console.log("Alphabetical order:", __spreadArray([], placesToVisit, true).sort());
// Print original array again
console.log("Original order:", placesToVisit);
// Print array in reverse alphabetical order
console.log("Reverse alphabetical order:", __spreadArray([], placesToVisit, true).sort().reverse());
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
placesToVisit.sort(function (a, b) { return b.localeCompare(a); });
console.log("Reverse alphabetical order:", placesToVisit);
