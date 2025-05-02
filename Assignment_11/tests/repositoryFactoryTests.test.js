const RepositoryFactory = require("../factories/RepositoryFactory");

describe("Repository Factory Tests", () => {
  test("Should return an in-memory ForkliftOperator repository", () => {
    const operatorRepo = RepositoryFactory.getRepository("ForkliftOperator", "MEMORY");
    expect(operatorRepo).toBeDefined();
    expect(typeof operatorRepo.save).toBe("function");
    expect(typeof operatorRepo.findById).toBe("function");
  });

  test("Should return an in-memory License repository", () => {
    const licenseRepo = RepositoryFactory.getRepository("License", "MEMORY");
    expect(licenseRepo).toBeDefined();
    expect(typeof licenseRepo.save).toBe("function");
    expect(typeof licenseRepo.findById).toBe("function");
  });

  test("Should throw an error for unsupported entity type", () => {
    expect(() => RepositoryFactory.getRepository("UnsupportedEntity", "MEMORY")).toThrow(
      "Unsupported entity type: UnsupportedEntity"
    );
  });

  test("Should throw an error for unsupported storage type", () => {
    expect(() => RepositoryFactory.getRepository("ForkliftOperator", "DATABASE")).toThrow(
      "Unsupported storage type: DATABASE"
    );
  });
});