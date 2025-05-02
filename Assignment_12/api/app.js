const express = require("express");
const bodyParser = require("body-parser");
const forkliftOperatorRoutes = require("./routes/forkliftOperatorRoutes");
const licenseRoutes = require("./routes/licenseRoutes");
const reminderRoutes = require("./routes/reminderRoutes");

const app = express();
app.use(bodyParser.json());

// API Routes
app.use("/api/operators", forkliftOperatorRoutes);
app.use("/api/licenses", licenseRoutes);
app.use("/api/reminders", reminderRoutes);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});