let _name: string = "Zaid Ahmad";

console.log(_name.toLowerCase()); // prints "zaid ahmad"
console.log(_name.toUpperCase()); // prints "ZAID AHMAD"

let words: string[] = _name.split(" ");
let titlecase: string = "";

for(let i = 0; i < words.length; i++){
  let word: string = words[i].toLowerCase();
  titlecase += word.charAt(0).toUpperCase() + word.slice(1) + " ";
}

console.log(titlecase.trim()); // prints "Zaid Ahmad"
