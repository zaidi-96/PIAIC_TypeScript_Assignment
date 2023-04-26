// Guests list
var guests = ["Jawad", "Mahad", "Adam", "Ali", "Syed"];
// Print message about new table
console.log("Good news! We found a bigger dinner table!\n");
// Add new guests to the list
guests.unshift("Muhammad"); // Add to the beginning
guests.splice(3, 0, "Eisa"); // Add to the middle
guests.push("Daud"); // Add to the end using append()
// Print invitation messages to all guests
for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
    var guest = guests_1[_i];
    console.log("Dear ".concat(guest, ", please join us for dinner at 7pm."));
}
// Print message that table can only fit two people
console.log("\nOops, turns out the new table won't arrive on time. We can only invite two people for dinner.");
// Remove guests until only two are left
while (guests.length > 2) {
    var guest = guests.pop();
    console.log("Sorry ".concat(guest, ", we won't be able to invite you to dinner."));
}
// Print invitation messages to remaining guests
for (var _a = 0, guests_2 = guests; _a < guests_2.length; _a++) {
    var guest = guests_2[_a];
    console.log("Dear ".concat(guest, ", please join us for dinner at 7pm."));
}
// Empty the list
guests = [];
// Print the empty list
console.log(guests);
