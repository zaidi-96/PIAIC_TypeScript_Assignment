// Starting list of guests
let guest_List: string[] = ["Ali", "Mahad", "Ismail"];
let count=0;
// Print invitation message for each guest
for (let guest of guest_List) {
  console.log(`Dear ${guest}, please join me for dinner tonight!`);
  
}

// One guest can't make it
let absent_Guest: string = guest_List[1];
console.log(`Unfortunately, ${absent_Guest} can't make it to dinner.`);

// Replace absent guest with a new invitee
guest_List[1] = "Naveed";

// Print updated invitation message for each guest
for (let guest of guest_List) {
  console.log(`Dear ${guest}, please join me for dinner tonight!`);
  count++;
}
console.log(`Number of guest come for the dinner are ${count} in number`);