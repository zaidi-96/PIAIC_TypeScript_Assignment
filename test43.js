function order_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("You ordered a sandwich with ".concat(items.join(", ")));
}
order_sandwich("lettuce", "tomato", "cheese");
order_sandwich("bacon", "eggs", "avocado", "mayonnaise");
order_sandwich("turkey", "ham");
