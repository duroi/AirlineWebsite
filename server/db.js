//In production this shouldn't be public

const Pool = require('pg').Pool

//Database information
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'final_project',
  password: 'asqw1234!',
  port: 5432,
});


module.exports = pool;