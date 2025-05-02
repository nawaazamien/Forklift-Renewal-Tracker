const InMemoryForkliftOperatorRepository = require("../repositories/inmemory/InMemoryForkliftOperatorRepository");
const InMemoryLicenseRepository = require("../repositories/inmemory/InMemoryLicenseRepository");

class RepositoryFactory {
  static getRepository(entityType, storageType = "MEMORY") {
    switch (entityType) {
      case "ForkliftOperator":
        if (storageType === "MEMORY") {
          return new InMemoryForkliftOperatorRepository();
        }
        // Future: Add other storage backends (e.g., DATABASE, FILESYSTEM)
        throw new Error(`Unsupported storage type: ${storageType}`);
      case "License":
        if (storageType === "MEMORY") {
          return new InMemoryLicenseRepository();
        }
        // Future: Add other storage backends (e.g., DATABASE, FILESYSTEM)
        throw new Error(`Unsupported storage type: ${storageType}`);
      default:
        throw new Error(`Unsupported entity type: ${entityType}`);
    }
  }
}

module.exports = RepositoryFactory;