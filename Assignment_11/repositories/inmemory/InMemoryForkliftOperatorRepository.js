class InMemoryForkliftOperatorRepository {
    constructor() {
      this.storage = new Map(); // In-memory HashMap
    }
  
    save(operator) {
      this.storage.set(operator.operatorID, operator);
    }
  
    findById(operatorID) {
      return this.storage.get(operatorID) || null;
    }
  
    findAll() {
      return Array.from(this.storage.values());
    }
  
    delete(operatorID) {
      this.storage.delete(operatorID);
    }
  }
  
  module.exports = InMemoryForkliftOperatorRepository;