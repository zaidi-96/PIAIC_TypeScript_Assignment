function create_car(manufacturer, model) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    for (var i = 0; i < args.length; i += 2) {
        car[args[i]] = args[i + 1];
    }
    return car;
}
console.log(create_car("Toyota", "Corolla", "color", "red", "year", 2022));
console.log(create_car("Honda", "Civic", "color", "blue"));
console.log(create_car("Tesla", "Model S", "color", "white", "autopilot", true));
