const db = require('../db');

const processController = {
  createProcess: async (req, res) => {
    const { userId, signatoryIds, comments, picture } = req.body;
    console.log(userId , signatoryIds , comments , picture , "logs in create processs")
    try {
      // Insert process data into the database
      const result = await db.query('INSERT INTO xalts.processes (user_id, signatoryIds, comments, picture) VALUES ($1, $2, $3, $4) RETURNING *', [userId, signatoryIds, comments, picture]);

      res.status(201).json({ message: 'Process created', process: result.rows[0] });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while creating the process' });
    }
  },

  viewProcess: async (req, res) => {
    const processId = req.params.processId;

    try {
      // Fetch the process details from the database
      const result = await db.query('SELECT * FROM xalts.processes WHERE id = $1', [processId]);

      if (result.rows.length === 0) {
        return res.status(404).json({ error: 'Process not found' });
      }

      const process = result.rows[0];

      // Implement logic for viewing process details

      res.status(200).json({ process });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching the process' });
    }
  },
};

module.exports = processController;
