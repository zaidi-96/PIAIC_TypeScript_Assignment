// Starting list of guests
var guest_List = ["Ali", "Mahad", "Ismail"];
var count = 0;
// Print invitation message for each guest
for (var _i = 0, guest_List_1 = guest_List; _i < guest_List_1.length; _i++) {
    var guest = guest_List_1[_i];
    console.log("Dear ".concat(guest, ", please join me for dinner tonight!"));
}
// One guest can't make it
var absent_Guest = guest_List[1];
console.log("Unfortunately, ".concat(absent_Guest, " can't make it to dinner."));
// Replace absent guest with a new invitee
guest_List[1] = "Naveed";
// Print updated invitation message for each guest
for (var _a = 0, guest_List_2 = guest_List; _a < guest_List_2.length; _a++) {
    var guest = guest_List_2[_a];
    console.log("Dear ".concat(guest, ", please join me for dinner tonight!"));
    count++;
}
console.log("Number of guest come for the dinner are ".concat(count, " in number"));
