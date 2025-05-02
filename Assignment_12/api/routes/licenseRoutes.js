const express = require("express");
const LicenseService = require("../../services/LicenseService");
const InMemoryLicenseRepository = require("../../../Assignment_11/repositories/inmemory/InMemoryLicenseRepository");

const router = express.Router();
const licenseRepo = new InMemoryLicenseRepository();
const licenseService = new LicenseService(licenseRepo);

// Fetch all licenses
router.get("/", (req, res) => {
  const licenses = licenseRepo.findAll();
  res.json(licenses);
});

// Create a new license
router.post("/", (req, res) => {
  try {
    const license = licenseService.createLicense(req.body);
    res.status(201).json(license);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Renew a license
router.put("/:id/renew", (req, res) => {
  try {
    const updatedLicense = licenseService.renewLicense(req.params.id, req.body.newExpiryDate);
    res.json(updatedLicense);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = router;