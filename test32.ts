let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < numbers.length; i++) {
  let number = numbers[i];
  let ending;

  if (number === 1) {
    ending = "st";
  } else if (number === 2) {
    ending = "nd";
  } else if (number === 3) {
    ending = "rd";
  } else {
    ending = "th";
  }

  console.log(number + ending);
}
