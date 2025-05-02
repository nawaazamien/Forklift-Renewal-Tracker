class InMemoryLicenseRepository {
    constructor() {
      this.storage = new Map(); // In-memory HashMap
    }
  
    save(license) {
      this.storage.set(license.licenseID, license);
    }
  
    findById(licenseID) {
      return this.storage.get(licenseID) || null;
    }
  
    findAll() {
      return Array.from(this.storage.values());
    }
  
    delete(licenseID) {
      this.storage.delete(licenseID);
    }
  }
  
  module.exports = InMemoryLicenseRepository;