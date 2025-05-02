const express = require("express");
const LicenseService = require("../../services/LicenseService");
const InMemoryLicenseRepository = require("../../../Assignment_11/repositories/inmemory/InMemoryLicenseRepository");

const router = express.Router();
const licenseRepo = new InMemoryLicenseRepository();
const licenseService = new LicenseService(licenseRepo);

/**
 * @swagger
 * /api/licenses:
 *   get:
 *     summary: Fetch all licenses
 *     responses:
 *       200:
 *         description: A list of licenses
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   licenseID:
 *                     type: string
 *                   issueDate:
 *                     type: string
 *                     format: date
 *                   expiryDate:
 *                     type: string
 *                     format: date
 *   post:
 *     summary: Create a new license
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               licenseID:
 *                 type: string
 *               issueDate:
 *                 type: string
 *                 format: date
 *               expiryDate:
 *                 type: string
 *                 format: date
 *     responses:
 *       201:
 *         description: License created successfully
 *       400:
 *         description: Invalid input
 */

/**
 * @swagger
 * /api/licenses/{id}/renew:
 *   put:
 *     summary: Renew a license
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the license to renew
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               newExpiryDate:
 *                 type: string
 *                 format: date
 *     responses:
 *       200:
 *         description: License renewed successfully
 *       404:
 *         description: License not found
 */

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