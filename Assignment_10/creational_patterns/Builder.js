class Pizza {
    constructor() {
      this.cheese = false;
      this.toppings = [];
    }
  }
  
  class PizzaBuilder {
    constructor() {
      this.pizza = new Pizza();
    }
  
    addCheese() {
      this.pizza.cheese = true;
      return this;
    }
  
    addTopping(topping) {
      this.pizza.toppings.push(topping);
      return this;
    }
  
    build() {
      return this.pizza;
    }
  }
  
  module.exports = PizzaBuilder;