class License {
    constructor(licenseID, issueDate, expiryDate, status) {
      this.licenseID = licenseID;
      this.issueDate = issueDate;
      this.expiryDate = expiryDate;
      this.status = status;
    }
  
    validateLicense() {
      return this.status === "valid";
    }
  
    renewLicense(newExpiryDate) {
      this.expiryDate = newExpiryDate;
      this.status = "valid";
      console.log(`License ${this.licenseID} has been renewed.`);
    }
  }
  
  module.exports = License;