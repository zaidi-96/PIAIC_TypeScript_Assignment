// Guests list
let guests: string[] = ["Jawad", "Mahad", "Adam", "Ali", "Syed"];

// Print message about new table
console.log("Good news! We found a bigger dinner table!\n");

// Add new guests to the list
guests.unshift("Muhammad"); // Add to the beginning
guests.splice(3, 0, "Eisa"); // Add to the middle
guests.push("Daud"); // Add to the end using append()

// Print invitation messages to all guests
for (let guest of guests) {
  console.log(`Dear ${guest}, please join us for dinner at 7pm.`);
}

// Print message that table can only fit two people
console.log("\nOops, turns out the new table won't arrive on time. We can only invite two people for dinner.");

// Remove guests until only two are left
while (guests.length > 2) {
  let guest = guests.pop();
  console.log(`Sorry ${guest}, we won't be able to invite you to dinner.`);
}

// Print invitation messages to remaining guests
for (let guest of guests) {
  console.log(`Dear ${guest}, please join us for dinner at 7pm.`);
}

// Empty the list
guests = [];

// Print the empty list
console.log(guests);


