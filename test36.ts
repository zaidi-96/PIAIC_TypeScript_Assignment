function make_shirt(size: string = "Large", message: string = "I love JavaScript"): void {
    console.log(`The shirt is ${size} size and the message is "${message}".`);
  }
  
  make_shirt();
  make_shirt("Medium");
  make_shirt("Small", "TypeScript is awesome!");
  