class Reminder {
    constructor(reminderID, type, sendDate, recipient) {
      this.reminderID = reminderID;
      this.type = type;
      this.sendDate = sendDate;
      this.recipient = recipient;
    }
  
    sendReminder() {
      console.log(`Reminder ${this.reminderID} sent to ${this.recipient}.`);
    }
  }
  
  module.exports = Reminder;