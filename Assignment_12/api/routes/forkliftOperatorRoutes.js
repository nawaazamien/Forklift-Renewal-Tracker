const express = require("express");
const ForkliftOperatorService = require("../../services/ForkliftOperatorService");
const InMemoryForkliftOperatorRepository = require("../../../Assignment_11/repositories/inmemory/InMemoryForkliftOperatorRepository");

const router = express.Router();
const operatorRepo = new InMemoryForkliftOperatorRepository();
const operatorService = new ForkliftOperatorService(operatorRepo);

/**
 * @swagger
 * /api/operators:
 *   get:
 *     summary: Fetch all forklift operators
 *     responses:
 *       200:
 *         description: A list of forklift operators
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   operatorID:
 *                     type: string
 *                   name:
 *                     type: string
 *                   email:
 *                     type: string
 *   post:
 *     summary: Create a new forklift operator
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               operatorID:
 *                 type: string
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       201:
 *         description: Operator created successfully
 *       400:
 *         description: Invalid input
 */

// Fetch all operators
router.get("/", (req, res) => {
  const operators = operatorService.getAllOperators();
  res.json(operators);
});

// Create a new operator
router.post("/", (req, res) => {
  try {
    const operator = operatorService.createOperator(req.body);
    res.status(201).json(operator);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update an operator
router.put("/:id", (req, res) => {
  try {
    const operator = operatorService.getOperatorById(req.params.id);
    Object.assign(operator, req.body);
    operatorService.createOperator(operator); // Save updated operator
    res.json(operator);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// Delete an operator
router.delete("/:id", (req, res) => {
  try {
    operatorService.deleteOperator(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = router;