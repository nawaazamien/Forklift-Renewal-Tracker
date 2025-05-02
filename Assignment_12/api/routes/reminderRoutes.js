const express = require("express");
const ReminderService = require("../../services/ReminderService");
const InMemoryForkliftOperatorRepository = require("../../../Assignment_11/repositories/inmemory/InMemoryForkliftOperatorRepository");

const router = express.Router();
const operatorRepo = new InMemoryForkliftOperatorRepository();
const reminderService = new ReminderService(operatorRepo);

// Send reminders for expiring licenses
router.post("/send", (req, res) => {
  try {
    reminderService.sendRemindersForExpiringLicenses();
    res.json({ message: "Reminders sent successfully." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;