// backend/routes/bugs.js
const express = require('express');
const router = express.Router();
const Bug = require('../models/Bug');

// Create bug
router.post('/', async (req, res) => {
  try {
    const bug = new Bug(req.body);
    await bug.save();
    res.status(201).json(bug);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all bugs
router.get('/', async (req, res) => {
  try {
    const bugs = await Bug.find();
    res.json(bugs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update bug
router.put('/:id', async (req, res) => {
  try {
    const bug = await Bug.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(bug);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete bug
router.delete('/:id', async (req, res) => {
  try {
    await Bug.findByIdAndDelete(req.params.id);
    res.json({ message: 'Bug deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
