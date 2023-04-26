var _name = "Zaid Ahmad";
console.log(_name.toLowerCase()); // prints "zaid ahmad"
console.log(_name.toUpperCase()); // prints "ZAID AHMAD"
var words = _name.split(" ");
var titlecase = "";
for (var i = 0; i < words.length; i++) {
    var word = words[i].toLowerCase();
    titlecase += word.charAt(0).toUpperCase() + word.slice(1) + " ";
}
console.log(titlecase.trim()); // prints "Zaid Ahmad"
