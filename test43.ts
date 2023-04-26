function order_sandwich(...items: string[]): void {
    console.log(`You ordered a sandwich with ${items.join(", ")}`);
  }
  
  order_sandwich("lettuce", "tomato", "cheese");
  order_sandwich("bacon", "eggs", "avocado", "mayonnaise");
  order_sandwich("turkey", "ham");
  