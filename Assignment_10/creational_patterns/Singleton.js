class DatabaseConnection {
    constructor() {
      if (DatabaseConnection.instance) {
        return DatabaseConnection.instance;
      }
      this.connection = "Connected to the database";
      DatabaseConnection.instance = this;
    }
  
    getConnection() {
      return this.connection;
    }
  }
  
  module.exports = DatabaseConnection;