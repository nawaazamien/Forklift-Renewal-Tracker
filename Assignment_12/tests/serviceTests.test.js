const InMemoryForkliftOperatorRepository = require("../../Assignment_11/repositories/inmemory/InMemoryForkliftOperatorRepository");
const InMemoryLicenseRepository = require("../../Assignment_11/repositories/inmemory/InMemoryLicenseRepository");
const ForkliftOperatorService = require("../services/ForkliftOperatorService");
const LicenseService = require("../services/LicenseService");
const ReminderService = require("../services/ReminderService");

describe("Service Layer Tests", () => {
  let operatorRepo, licenseRepo, operatorService, licenseService, reminderService;

  beforeEach(() => {
    operatorRepo = new InMemoryForkliftOperatorRepository();
    licenseRepo = new InMemoryLicenseRepository();
    operatorService = new ForkliftOperatorService(operatorRepo);
    licenseService = new LicenseService(licenseRepo);
    reminderService = new ReminderService(operatorRepo);
  });

  // ForkliftOperatorService Tests
  test("Should create a new operator", () => {
    const operator = { operatorID: "1", name: "John Doe", email: "john@example.com" };
    operatorService.createOperator(operator);
    const retrieved = operatorService.getOperatorById("1");
    expect(retrieved).toEqual(operator);
  });

  test("Should throw an error when creating an operator without ID or name", () => {
    expect(() => operatorService.createOperator({})).toThrow("Operator must have an ID and a name.");
  });

  // LicenseService Tests
  test("Should create a new license", () => {
    const license = { licenseID: "L1", issueDate: "2025-01-01", expiryDate: "2026-01-01" };
    licenseService.createLicense(license);
    const retrieved = licenseService.getLicenseById("L1");
    expect(retrieved).toEqual(license);
  });

  test("Should renew a license", () => {
    const license = { licenseID: "L1", issueDate: "2025-01-01", expiryDate: "2026-01-01" };
    licenseService.createLicense(license);
    licenseService.renewLicense("L1", "2027-01-01");
    const updated = licenseService.getLicenseById("L1");
    expect(updated.expiryDate).toBe("2027-01-01");
  });

  // ReminderService Tests
  test("Should send reminders for expiring licenses", () => {
    const operator = { operatorID: "1", name: "John Doe", email: "john@example.com", licenseExpiryDate: "2025-05-01" };
    operatorRepo.save(operator);
    console.log = jest.fn(); // Mock console.log
    reminderService.sendRemindersForExpiringLicenses();
    expect(console.log).toHaveBeenCalledWith("Reminder sent to John Doe at john@example.com.");
  });
});