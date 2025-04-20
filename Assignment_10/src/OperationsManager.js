class OperationsManager {
    constructor(managerID, name, email, department) {
      this.managerID = managerID;
      this.name = name;
      this.email = email;
      this.department = department;
      this.operators = [];
    }
  
    addOperator(operator) {
      this.operators.push(operator);
      console.log(`${operator.name} has been added by ${this.name}.`);
    }
  
    removeOperator(operatorID) {
      this.operators = this.operators.filter(op => op.operatorID !== operatorID);
      console.log(`Operator with ID ${operatorID} has been removed by ${this.name}.`);
    }
  
    viewComplianceReports() {
      console.log(`${this.name} is viewing compliance reports.`);
    }
  }
  
  module.exports = OperationsManager;