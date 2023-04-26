let guests = ['Ali', 'Behram', 'Chaudhary'];
console.log(`Original guests list: ${guests}`);

console.log("Good news, everyone! I found a bigger dinner table.");

guests.unshift('David'); // adding a guest at the beginning
console.log(`New guests list (after adding one guest at the beginning): ${guests}`);

guests.splice(2, 0, 'Ehsan'); // adding a guest in the middle
console.log(`New guests list (after adding one guest in the middle): ${guests}`);

guests.push('Farhan'); // adding a guest at the end using push()
console.log(`New guests list (after adding one guest at the end): ${guests}`);

// printing invitation messages for each guest
for(let i=0; i<guests.length; i++){
    console.log(`Dear ${guests[i]}, please join me for dinner at my place!`);
}