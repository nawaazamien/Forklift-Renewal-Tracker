# Forklift License Renewal Tracker

## Project Title and Description
The **Forklift License Renewal Tracker** is a web-based application designed to help forklift operators and operations managers track and manage forklift license renewals. The system sends timely reminders to ensure that licenses are renewed before they expire, helping to maintain compliance with safety regulations.

## Links
- [SPECIFICATION.md](https://github.com/nawaazamien/Forklift-Renewal-Tracker/blob/main/SPECIFICATION.md)
- [ARCHITECTURE.md](https://github.com/nawaazamien/Forklift-Renewal-Tracker/blob/main/ARCHITECTURE.md)
- [STAKEHOLDERS.md](https://github.com/nawaazamien/Forklift-Renewal-Tracker/blob/main/STAKEHOLDERS.md)
- [SYSTEM_REQUIREMENTS_DOCUMENT.md](https://github.com/nawaazamien/Forklift-Renewal-Tracker/blob/main/SYSTEM_REQUIREMENTS_DOCUMENT.md)
- [TEST_AND_USE_CASE_DOCUMENT.md](https://github.com/nawaazamien/Forklift-Renewal-Tracker/blob/main/TEST_AND_USE_CASE_DOCUMENT.md)
- [REFLECTION.md](https://github.com/nawaazamien/Forklift-Renewal-Tracker/blob/main/REFLECTION.md)
- [AGILE_PLANNING_DOCUMENT.md](https://github.com/nawaazamien/Forklift-Renewal-Tracker/blob/main/AGILE_PLANNING_DOCUMENT.md)
- [CHANGELOG.md](https://github.com/nawaazamien/Forklift-Renewal-Tracker/blob/main/CHANGELOG.md)

## Assignment 7: Additional Files
- [template_analysis.md](https://github.com/nawaazamien/Forklift-Renewal-Tracker/blob/main/Assignment_7/template_analysis.md)
- [kanban_explanation.md](https://github.com/nawaazamien/Forklift-Renewal-Tracker/blob/main/Assignment_7/kanban_explanation.md)
- [reflection.md](https://github.com/nawaazamien/Forklift-Renewal-Tracker/blob/main/Assignment_7/reflection.md)

## Assignment 9: Additional Files
- [Domain_Model.md](https://github.com/nawaazamien/Forklift-Renewal-Tracker/blob/main/Assignment_9/Domain_Model.md)
- [CLASS_DIAGRAM.md](https://github.com/nawaazamien/Forklift-Renewal-Tracker/blob/main/Assignment_9/CLASS_DIAGRAM.md)
- [REFLECTION.md](https://github.com/nawaazamien/Forklift-Renewal-Tracker/blob/main/Assignment_9/REFLECTION.md)

## Assignment 10: From Class Diagrams to Code

### Language Choice: JavaScript
JavaScript was chosen for its simplicity and flexibility in implementing object-oriented designs. It also allows for easy integration with testing frameworks like Jest.

### Key Design Decisions
1. **Class Implementation**: Each class from the UML diagram was implemented with attributes, methods, and relationships.
2. **Creational Patterns**: All six creational patterns (Simple Factory, Factory Method, Abstract Factory, Builder, Prototype, Singleton) were implemented to demonstrate different object-creation strategies.
3. **Testing**: Jest was used as the testing framework to validate object creation, attribute initialization, and edge cases.

---

### How to Run Tests

To run the tests and validate the implementation, follow these steps:

#### **1. Install Node.js**
Ensure you have Node.js installed on your system. You can download it from [Node.js Official Website](https://nodejs.org/).

#### **2. Clone the Repository**
Clone this repository to your local machine:
```bash
git clone https://github.com/nawaazamien/Forklift-Renewal-Tracker.git
cd Forklift-Renewal-Tracker
```

---

### Bug Fixes
During testing, several issues were identified and resolved. Below is a summary of the fixes:

1. **[Bug] ReminderFactory: Invalid Reminder Type**
   - **Issue**: The `SimpleFactory` test failed because the factory did not handle invalid reminder types properly.
   - **Fix**: Added validation to ensure only valid types (`email`, `sms`) are accepted. An error is thrown for invalid types.

2. **[Bug] CreditCardProcessor: Missing Payment Validation**
   - **Issue**: The `FactoryMethod` test failed because the `CreditCardProcessor` did not validate payment amounts.
   - **Fix**: Added validation to ensure payment amounts are greater than 0. An error is thrown for invalid amounts.

3. **[Bug] GUIFactory: Unsupported OS Type**
   - **Issue**: The `AbstractFactory` test failed because the factory did not handle unsupported OS types gracefully.
   - **Fix**: Added validation to throw an error for unsupported OS types.

4. **[Bug] PizzaBuilder: Empty Pizza Creation**
   - **Issue**: The `Builder` test failed because it allowed creating a pizza with no ingredients.
   - **Fix**: Added validation to prevent creating a pizza without cheese or toppings.

5. **[Bug] Shape Prototype: Incorrect Cloning**
   - **Issue**: The `Prototype` test failed because the cloned object did not copy all attributes correctly.
   - **Fix**: Updated the `clone()` method to ensure all attributes are copied.

6. **[Bug] Singleton: Multiple Instances Created**
   - **Issue**: The `Singleton` test failed because multiple instances of `DatabaseConnection` were being created.
   - **Fix**: Ensured that only one instance of `DatabaseConnection` is created using a static instance and `Object.freeze()`.

7. **[Bug] ReminderFactory: Missing Recipient**
   - **Issue**: The `SimpleFactory` test failed because it did not handle cases where the recipient was missing.
   - **Fix**: Added validation to ensure the recipient is provided. An error is thrown if the recipient is missing.

8. **[Bug] GUIFactory: Missing Render Method**
   - **Issue**: The `AbstractFactory` test failed because the `render()` method was not implemented for all button types.
   - **Fix**: Ensured that both `WindowsButton` and `MacOSButton` implement the `render()` method.
```