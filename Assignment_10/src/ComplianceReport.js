class ComplianceReport {
    constructor(reportID, generatedDate, operatorList, status) {
      this.reportID = reportID;
      this.generatedDate = generatedDate;
      this.operatorList = operatorList;
      this.status = status;
    }
  
    generateReport() {
      console.log(`Compliance report ${this.reportID} has been generated.`);
    }
  
    viewReport() {
      console.log(`Viewing compliance report ${this.reportID}.`);
    }
  }
  
  module.exports = ComplianceReport;