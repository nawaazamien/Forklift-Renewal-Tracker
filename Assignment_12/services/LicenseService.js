class LicenseService {
    constructor(licenseRepository) {
      this.licenseRepository = licenseRepository;
    }
  
    createLicense(license) {
      if (!license.licenseID || !license.issueDate || !license.expiryDate) {
        throw new Error("License must have an ID, issue date, and expiry date.");
      }
      this.licenseRepository.save(license);
      return license;
    }
  
    getLicenseById(licenseID) {
      const license = this.licenseRepository.findById(licenseID);
      if (!license) {
        throw new Error(`License with ID ${licenseID} not found.`);
      }
      return license;
    }
  
    renewLicense(licenseID, newExpiryDate) {
      const license = this.licenseRepository.findById(licenseID);
      if (!license) {
        throw new Error(`License with ID ${licenseID} not found.`);
      }
      license.expiryDate = newExpiryDate;
      this.licenseRepository.save(license);
      return license;
    }
  }
  
  module.exports = LicenseService;