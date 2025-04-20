class ITAdministrator {
    constructor(adminID, name, email) {
      this.adminID = adminID;
      this.name = name;
      this.email = email;
    }
  
    performSecurityAudit() {
      console.log(`${this.name} is performing a security audit.`);
    }
  
    manageSystemDeployment() {
      console.log(`${this.name} is managing system deployment.`);
    }
  }
  
  module.exports = ITAdministrator;