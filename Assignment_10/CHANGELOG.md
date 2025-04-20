# 📋 Changelog

All notable changes to this project will be documented in this file.

## [1.0.1] - 2025-04-20
### Fixed
- **ReminderFactory**: Added validation for invalid reminder types (`email`, `sms`) and missing recipients.
- **CreditCardProcessor**: Added validation to ensure payment amounts are greater than 0.
- **GUIFactory**: Added error handling for unsupported OS types and ensured all button types implement the `render()` method.
- **PizzaBuilder**: Prevented creating a pizza without cheese or toppings.
- **Shape Prototype**: Fixed cloning to ensure all attributes are copied correctly.
- **Singleton**: Ensured only one instance of `DatabaseConnection` is created using a static instance and `Object.freeze()`.

## [1.0.0] - 2025-04-19
### Added
- Initial implementation of the **Forklift License Renewal Tracker** project.
- Implemented six creational design patterns:
  - **Simple Factory**
  - **Factory Method**
  - **Abstract Factory**
  - **Builder**
  - **Prototype**
  - **Singleton**
- Added unit tests for all creational patterns using Jest.