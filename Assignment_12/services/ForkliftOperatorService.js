class ForkliftOperatorService {
    constructor(operatorRepository) {
      this.operatorRepository = operatorRepository;
    }
  
    createOperator(operator) {
      if (!operator.operatorID || !operator.name) {
        throw new Error("Operator must have an ID and a name.");
      }
      this.operatorRepository.save(operator);
      return operator;
    }
  
    getOperatorById(operatorID) {
      const operator = this.operatorRepository.findById(operatorID);
      if (!operator) {
        throw new Error(`Operator with ID ${operatorID} not found.`);
      }
      return operator;
    }
  
    getAllOperators() {
      return this.operatorRepository.findAll();
    }
  
    deleteOperator(operatorID) {
      const operator = this.operatorRepository.findById(operatorID);
      if (!operator) {
        throw new Error(`Operator with ID ${operatorID} not found.`);
      }
      this.operatorRepository.delete(operatorID);
    }
  }
  
  module.exports = ForkliftOperatorService;