class Reminder {
    constructor(type, recipient) {
      this.type = type;
      this.recipient = recipient;
    }
  
    send() {
      console.log(`Sending ${this.type} reminder to ${this.recipient}`);
    }
  }
  
  class ReminderFactory {
    static createReminder(type, recipient) {
      if (!["email", "sms"].includes(type)) {
        throw new Error(`Invalid reminder type: ${type}`);
      }
      return new Reminder(type, recipient);
    }
  }
  
  module.exports = ReminderFactory;