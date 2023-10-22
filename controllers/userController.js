const db = require('../db');
const bcrypt = require('bcrypt');

const userController = {
  signup: async (req, res) => {
    const { name, email, password } = req.body;
    console.log(name , email , password , "name");

    try {
      // Hash the password before storing it
      const hashedPassword = await bcrypt.hash(password, 10);

      // Insert user data into the database
      const result = await db.query('INSERT INTO xalts.users (name, email, password) VALUES ($1, $2, $3) RETURNING *', [name, email, hashedPassword]);

      res.status(201).json({ message: 'User created', user: result.rows[0] });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while signing up' });
    }
  },

  login: async (req, res) => {
    const { email, password } = req.body;

    try {
      const result = await db.query('SELECT * FROM xalts.users WHERE email = $1', [email]);
      
      if (result.rows.length === 0) {
        return res.status(401).json({ error: 'Authentication failed' });
      }

      const user = result.rows[0];
      console.log(user , "user");

      // Compare the provided password with the hashed password in the database
      const passwordMatch = await bcrypt.compare(password, user.password);
      console.log(passwordMatch , "match")

      if (!passwordMatch) {
        return res.status(401).json({ error: 'Authentication failed' });
      }

      // Implement authentication logic (e.g., JWT tokens)

      res.status(200).json({ message: 'Authentication successful' });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while logging in' });
    }
  },
};

module.exports = userController;
