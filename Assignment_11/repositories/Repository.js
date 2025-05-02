class Repository {
    save(entity) {
      throw new Error("Method 'save(entity)' must be implemented.");
    }
  
    findById(id) {
      throw new Error("Method 'findById(id)' must be implemented.");
    }
  
    findAll() {
      throw new Error("Method 'findAll()' must be implemented.");
    }
  
    delete(id) {
      throw new Error("Method 'delete(id)' must be implemented.");
    }
  }
  
  module.exports = Repository;