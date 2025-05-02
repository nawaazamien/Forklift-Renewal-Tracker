class ReminderService {
    constructor(operatorRepository) {
      this.operatorRepository = operatorRepository;
    }
  
    sendReminder(operatorID) {
      const operator = this.operatorRepository.findById(operatorID);
      if (!operator) {
        throw new Error(`Operator with ID ${operatorID} not found.`);
      }
      console.log(`Reminder sent to ${operator.name} at ${operator.email}.`);
    }
  
    sendRemindersForExpiringLicenses() {
      const operators = this.operatorRepository.findAll();
      const today = new Date();
      operators.forEach((operator) => {
        const expiryDate = new Date(operator.licenseExpiryDate);
        const daysToExpiry = Math.ceil((expiryDate - today) / (1000 * 60 * 60 * 24));
        if (daysToExpiry <= 30) {
          this.sendReminder(operator.operatorID);
        }
      });
    }
  }
  
  module.exports = ReminderService;