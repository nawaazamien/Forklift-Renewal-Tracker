class ForkliftOperator {
    constructor(operatorID, name, email, phoneNumber, licenseStatus, licenseExpiryDate) {
      this.operatorID = operatorID;
      this.name = name;
      this.email = email;
      this.phoneNumber = phoneNumber;
      this.licenseStatus = licenseStatus;
      this.licenseExpiryDate = licenseExpiryDate;
    }
  
    registerLicense() {
      console.log(`${this.name} has registered a license.`);
    }
  
    updateLicense(newExpiryDate) {
      this.licenseExpiryDate = newExpiryDate;
      console.log(`${this.name}'s license has been updated.`);
    }
  
    receiveReminder() {
      console.log(`Reminder sent to ${this.name} at ${this.email}.`);
    }
  }
  
  module.exports = ForkliftOperator;