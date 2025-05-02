const InMemoryForkliftOperatorRepository = require("../repositories/inmemory/InMemoryForkliftOperatorRepository");
const InMemoryLicenseRepository = require("../repositories/inmemory/InMemoryLicenseRepository");

describe("In-Memory Repository Tests", () => {
  let operatorRepo;
  let licenseRepo;

  beforeEach(() => {
    operatorRepo = new InMemoryForkliftOperatorRepository();
    licenseRepo = new InMemoryLicenseRepository();
  });

  // ForkliftOperatorRepository Tests
  test("Should save and retrieve a ForkliftOperator", () => {
    const operator = { operatorID: "1", name: "John Doe" };
    operatorRepo.save(operator);

    const retrieved = operatorRepo.findById("1");
    expect(retrieved).toEqual(operator);
  });

  test("Should retrieve all ForkliftOperators", () => {
    const operator1 = { operatorID: "1", name: "John Doe" };
    const operator2 = { operatorID: "2", name: "Jane Smith" };
    operatorRepo.save(operator1);
    operatorRepo.save(operator2);

    const allOperators = operatorRepo.findAll();
    expect(allOperators).toContain(operator1);
    expect(allOperators).toContain(operator2);
  });

  test("Should delete a ForkliftOperator", () => {
    const operator = { operatorID: "1", name: "John Doe" };
    operatorRepo.save(operator);

    operatorRepo.delete("1");
    const retrieved = operatorRepo.findById("1");
    expect(retrieved).toBeNull();
  });

  // LicenseRepository Tests
  test("Should save and retrieve a License", () => {
    const license = { licenseID: "L1", issueDate: "2025-01-01", expiryDate: "2026-01-01" };
    licenseRepo.save(license);

    const retrieved = licenseRepo.findById("L1");
    expect(retrieved).toEqual(license);
  });

  test("Should retrieve all Licenses", () => {
    const license1 = { licenseID: "L1", issueDate: "2025-01-01", expiryDate: "2026-01-01" };
    const license2 = { licenseID: "L2", issueDate: "2024-01-01", expiryDate: "2025-01-01" };
    licenseRepo.save(license1);
    licenseRepo.save(license2);

    const allLicenses = licenseRepo.findAll();
    expect(allLicenses).toContain(license1);
    expect(allLicenses).toContain(license2);
  });

  test("Should delete a License", () => {
    const license = { licenseID: "L1", issueDate: "2025-01-01", expiryDate: "2026-01-01" };
    licenseRepo.save(license);

    licenseRepo.delete("L1");
    const retrieved = licenseRepo.findById("L1");
    expect(retrieved).toBeNull();
  });
});