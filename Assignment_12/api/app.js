const express = require("express");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const swaggerDocs = require("./swaggerConfig");

const forkliftOperatorRoutes = require("./routes/forkliftOperatorRoutes");
const licenseRoutes = require("./routes/licenseRoutes");
const reminderRoutes = require("./routes/reminderRoutes");

const app = express();
app.use(bodyParser.json());

// Swagger Documentation
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// API Routes
app.use("/api/operators", forkliftOperatorRoutes);
app.use("/api/licenses", licenseRoutes);
app.use("/api/reminders", reminderRoutes);

// Export the app for testing
module.exports = app;

// Start the server only if not in test mode
if (require.main === module) {
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`Swagger Docs available at http://localhost:${PORT}/api-docs`);
  });
}