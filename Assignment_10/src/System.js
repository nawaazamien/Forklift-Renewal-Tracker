class System {
    constructor(systemID, version, status) {
      this.systemID = systemID;
      this.version = version;
      this.status = status;
    }
  
    deploy() {
      console.log(`System ${this.systemID} has been deployed.`);
    }
  
    update(newVersion) {
      this.version = newVersion;
      console.log(`System ${this.systemID} has been updated to version ${this.version}.`);
    }
  }
  
  module.exports = System;