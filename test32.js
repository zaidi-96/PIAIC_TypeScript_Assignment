var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    var ending = void 0;
    if (number === 1) {
        ending = "st";
    }
    else if (number === 2) {
        ending = "nd";
    }
    else if (number === 3) {
        ending = "rd";
    }
    else {
        ending = "th";
    }
    console.log(number + ending);
}
