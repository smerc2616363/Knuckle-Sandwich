const express = require('express');
const { getDatabase } = require('../db/database');

const router = express.Router();
const db = getDatabase();

// Middleware to check authentication
const requireAuth = (req, res, next) => {
  if (!req.session.userId) {
    return res.status(401).json({ error: 'Not authenticated' });
  }
  next();
};

// Submit report (M1 basic, M2 full functionality)
router.post('/submit', requireAuth, (req, res) => {
  const { incident_type, description, urgency_level, routing_option, is_anonymous, name } = req.body;

  // Basic validation for M1
  if (!incident_type || !description || !urgency_level || !routing_option) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  if (!is_anonymous && !name) {
    return res.status(400).json({ error: 'Name required unless anonymous' });
  }

  db.run(
    `INSERT INTO reports (user_id, incident_type, description, urgency_level, routing_option, is_anonymous, name)
     VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [req.session.userId, incident_type, description, urgency_level, routing_option, is_anonymous ? 1 : 0, is_anonymous ? null : name],
    function(err) {
      if (err) {
        return res.status(500).json({ error: 'Failed to submit report' });
      }
      res.json({ 
        message: 'Report submitted successfully',
        reportId: this.lastID
      });
    }
  );
});

// Get reports (placeholder for M2)
router.get('/my-reports', requireAuth, (req, res) => {
  db.all(
    'SELECT * FROM reports WHERE user_id = ? ORDER BY submitted_at DESC',
    [req.session.userId],
    (err, reports) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to fetch reports' });
      }
      res.json(reports);
    }
  );
});

module.exports = router;
