//In production this shouldn't be public

const Pool = require('pg').Pool

//Database information
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'airline_db',
  password: 'PASSWORD',
  port: 5432,
});


module.exports = pool;