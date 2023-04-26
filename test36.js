function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love JavaScript"; }
    console.log("The shirt is ".concat(size, " size and the message is \"").concat(message, "\"."));
}
make_shirt();
make_shirt("Medium");
make_shirt("Small", "TypeScript is awesome!");
