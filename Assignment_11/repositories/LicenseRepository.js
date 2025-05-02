const Repository = require("./Repository");

class LicenseRepository extends Repository {
  constructor() {
    super();
    this.licenses = new Map(); // In-memory storage
  }

  save(license) {
    this.licenses.set(license.licenseID, license);
  }

  findById(licenseID) {
    return this.licenses.get(licenseID) || null;
  }

  findAll() {
    return Array.from(this.licenses.values());
  }

  delete(licenseID) {
    this.licenses.delete(licenseID);
  }
}

module.exports = LicenseRepository;