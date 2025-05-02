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

### Assignment 10: Additional Files
- [SimpleFactory.js](https://github.com/nawaazamien/Forklift-Renewal-Tracker/blob/main/Assignment_10/creational_patterns/SimpleFactory.js)
- [FactoryMethod.js](https://github.com/nawaazamien/Forklift-Renewal-Tracker/blob/main/Assignment_10/creational_patterns/FactoryMethod.js)
- [AbstractFactory.js](https://github.com/nawaazamien/Forklift-Renewal-Tracker/blob/main/Assignment_10/creational_patterns/AbstractFactory.js)
- [Builder.js](https://github.com/nawaazamien/Forklift-Renewal-Tracker/blob/main/Assignment_10/creational_patterns/Builder.js)
- [Prototype.js](https://github.com/nawaazamien/Forklift-Renewal-Tracker/blob/main/Assignment_10/creational_patterns/Prototype.js)
- [Singleton.js](https://github.com/nawaazamien/Forklift-Renewal-Tracker/blob/main/Assignment_10/creational_patterns/Singleton.js)
- [creationalPatterns.test.js](https://github.com/nawaazamien/Forklift-Renewal-Tracker/blob/main/Assignment_10/tests/creationalPatterns.test.js)
- [CHANGELOG.md](https://github.com/nawaazamien/Forklift-Renewal-Tracker/blob/main/Assignment_10/CHANGELOG.md)

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

## Assignment 11: Implementing a Persistence Repository Layer

### In-Memory Implementation
1. **Design**:
   - The repository layer uses an in-memory `Map` (HashMap) to store domain entities (`ForkliftOperator`, `License`).
   - This approach is simple and efficient for testing and prototyping.

2. **CRUD Operations**:
   - Each repository supports standard CRUD operations:
     - `save(entity)`: Adds or updates an entity in the repository.
     - `findById(id)`: Retrieves an entity by its ID.
     - `findAll()`: Retrieves all entities in the repository.
     - `delete(id)`: Removes an entity by its ID.

3. **Extensibility**:
   - The in-memory implementation is designed to be easily replaceable with other storage backends (e.g., JSON files, databases).
   - Future implementations can use Dependency Injection or Factory Pattern to switch between storage backends.

### Example Usage
```javascript
const InMemoryForkliftOperatorRepository = require("./repositories/inmemory/InMemoryForkliftOperatorRepository");

const operatorRepo = new InMemoryForkliftOperatorRepository();

// Create a new operator
operatorRepo.save({ operatorID: "1", name: "John Doe" });

// Retrieve an operator by ID
const operator = operatorRepo.findById("1");
console.log(operator);

// Retrieve all operators
const allOperators = operatorRepo.findAll();
console.log(allOperators);

// Delete an operator
operatorRepo.delete("1");
```
### Storage-Abstraction Mechanism

1. **Design**:
   - The repository layer is decoupled from storage specifics using the **Factory Pattern**.
   - A `RepositoryFactory` class is responsible for returning the appropriate repository implementation based on the entity type and storage type.

2. **Factory Pattern**:
   - The `RepositoryFactory` provides a centralized mechanism to create repositories.
   - Currently, it supports in-memory storage (`MEMORY`) for `ForkliftOperator` and `License` entities.
   - Future storage backends (e.g., `DATABASE`, `FILESYSTEM`) can be added without modifying the existing repository classes.

3. **Extensibility**:
   - The factory pattern allows for easy addition of new storage backends by extending the `RepositoryFactory` class.
   - This ensures the application remains flexible and scalable.

### Example Usage
```javascript
const RepositoryFactory = require("./factories/RepositoryFactory");

// Get an in-memory repository for ForkliftOperator
const operatorRepo = RepositoryFactory.getRepository("ForkliftOperator", "MEMORY");

// Create a new operator
operatorRepo.save({ operatorID: "1", name: "John Doe" });

// Retrieve an operator by ID
const operator = operatorRepo.findById("1");
console.log(operator);

// Retrieve all operators
const allOperators = operatorRepo.findAll();
console.log(allOperators);

// Delete an operator
operatorRepo.delete("1");

```
## Future-Proofing the Repository Layer

### Design for Extensibility
1. **Repository Interfaces**:
   - The repository layer is designed with a generic `Repository` interface that defines standard CRUD operations (`save`, `findById`, `findAll`, `delete`).
   - This ensures consistency across all storage backends.

2. **Current Implementations**:
   - **In-Memory Repositories**: Use a `Map` for lightweight, fast storage during development and testing.

3. **Future Storage Backends**:
   - The system is designed to easily add new storage backends, such as:
     - **Filesystem Repositories**: Store entities in JSON or XML files.
     - **Database Repositories**: Use SQL or NoSQL databases for persistent storage.
     - **External APIs**: Integrate with external REST APIs for distributed storage.

4. **Factory Pattern**:
   - The `RepositoryFactory` class abstracts the creation of repositories, making it easy to switch between storage backends without modifying the application logic.

### Stub Implementations
1. **DatabaseForkliftOperatorRepository**:
   - A placeholder for a database-backed repository that will use a database connection to persist entities.

2. **FileSystemForkliftOperatorRepository**:
   - A placeholder for a filesystem-backed repository that will serialize entities to JSON files.

### Example Usage
```javascript
const RepositoryFactory = require("./factories/RepositoryFactory");

// Get a filesystem repository for ForkliftOperator (future implementation)
const operatorRepo = RepositoryFactory.getRepository("ForkliftOperator", "FILESYSTEM");

// Save an operator (not yet implemented)
operatorRepo.save({ operatorID: "1", name: "John Doe" });