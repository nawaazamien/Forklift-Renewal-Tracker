const Repository = require("./Repository");

class ForkliftOperatorRepository extends Repository {
  constructor() {
    super();
    this.operators = new Map(); // In-memory storage
  }

  save(operator) {
    this.operators.set(operator.operatorID, operator);
  }

  findById(operatorID) {
    return this.operators.get(operatorID) || null;
  }

  findAll() {
    return Array.from(this.operators.values());
  }

  delete(operatorID) {
    this.operators.delete(operatorID);
  }
}

module.exports = ForkliftOperatorRepository;