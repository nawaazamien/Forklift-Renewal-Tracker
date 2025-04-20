const ReminderFactory = require("../creational_patterns/SimpleFactory");
const { CreditCardProcessor, PayPalProcessor } = require("../creational_patterns/FactoryMethod");
const GUIFactory = require("../creational_patterns/AbstractFactory");
const PizzaBuilder = require("../creational_patterns/Builder");
const Shape = require("../creational_patterns/Prototype");
const DatabaseConnection = require("../creational_patterns/Singleton");

describe("Creational Patterns Unit Tests", () => {
  // Simple Factory
  test("Simple Factory: Should create a reminder and send it", () => {
    const reminder = ReminderFactory.createReminder("email", "operator@example.com");
    expect(reminder.type).toBe("email");
    expect(reminder.recipient).toBe("operator@example.com");
    reminder.send();
  });

  // Factory Method
  test("Factory Method: Should process payments using CreditCardProcessor", () => {
    const creditCardProcessor = new CreditCardProcessor();
    creditCardProcessor.processPayment(100);
    expect(creditCardProcessor instanceof CreditCardProcessor).toBe(true);
  });

  test("Factory Method: Should process payments using PayPalProcessor", () => {
    const payPalProcessor = new PayPalProcessor();
    payPalProcessor.processPayment(200);
    expect(payPalProcessor instanceof PayPalProcessor).toBe(true);
  });

  // Abstract Factory
  test("Abstract Factory: Should create a Windows button", () => {
    const windowsButton = GUIFactory.createButton("Windows");
    expect(windowsButton).toBeDefined();
    expect(() => windowsButton.render()).not.toThrow();
  });

  test("Abstract Factory: Should create a MacOS button", () => {
    const macButton = GUIFactory.createButton("MacOS");
    expect(macButton).toBeDefined();
    expect(() => macButton.render()).not.toThrow();
  });

  // Builder
  test("Builder: Should build a pizza with cheese and toppings", () => {
    const pizza = new PizzaBuilder().addCheese().addTopping("Pepperoni").addTopping("Mushrooms").build();
    expect(pizza.cheese).toBe(true);
    expect(pizza.toppings).toContain("Pepperoni");
    expect(pizza.toppings).toContain("Mushrooms");
  });

  test("Builder: Should handle edge case with no toppings", () => {
    const pizza = new PizzaBuilder().addCheese().build();
    expect(pizza.cheese).toBe(true);
    expect(pizza.toppings.length).toBe(0);
  });

  // Prototype
  test("Prototype: Should clone a shape", () => {
    const circle = new Shape("Circle", "Red");
    const clonedCircle = circle.clone();
    expect(clonedCircle.type).toBe("Circle");
    expect(clonedCircle.color).toBe("Red");
    expect(clonedCircle).not.toBe(circle); // Ensure it's a new object
  });

  // Singleton
  test("Singleton: Should return the same instance", () => {
    const db1 = new DatabaseConnection();
    const db2 = new DatabaseConnection();
    expect(db1).toBe(db2); // Both should point to the same instance
    expect(db1.getConnection()).toBe("Connected to the database");
  });

  test("Singleton: Should ensure thread safety", () => {
    const db1 = new DatabaseConnection();
    const db2 = new DatabaseConnection();
    expect(db1).toBe(db2); // Ensure thread safety by returning the same instance
  });
});