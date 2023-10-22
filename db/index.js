const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'notifcation',
  password: 'postgres',
  port: 5400,
});

module.exports = pool;