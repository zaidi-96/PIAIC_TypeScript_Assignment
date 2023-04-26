interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any;
  }
  
  function create_car(manufacturer: string, model: string, ...args: any[]): Car {
    const car: Car = {
      manufacturer: manufacturer,
      model: model
    };
    for (let i = 0; i < args.length; i += 2) {
      car[args[i]] = args[i + 1];
    }
    return car;
  }
  
  console.log(create_car("Toyota", "Corolla", "color", "red", "year", 2022));
  console.log(create_car("Honda", "Civic", "color", "blue"));
  console.log(create_car("Tesla", "Model S", "color", "white", "autopilot", true));
  