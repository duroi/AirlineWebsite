const pool = require("./db");

//Database Queries
const getFlights = () => {
    return new Promise(function(resolve, reject) {
      pool.query('SELECT * FROM flight ORDER BY flightnum ASC', (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(results.rows);
      })
    }) 
  }

const registerCustomer = (body) => {
  return new Promise(function(resolve, reject) {
    const { dob,email,password,fname,lname } = body
    pool.query('INSERT INTO INSERT INTO customer (dob,freqflynum,password,fname,lname) VALUES ($1, $2, $3, $4, $5)', [dob,email,password,fname,lname], (error, results) => {
      if(error) {
        reject(error)
      }
      resolve(`New user created : ${results.rows[0]}`)
      })
  })
}

const loginCustomer = (body) => {
  return new Promise(function(resolve, reject) {
    const {email, password} = body
    pool.query('SELECT EXISTS(SELECT * FROM customer WHERE email = $1 AND password = $2', [email, password],(error, results) => {
      if (error){
          reject(error)
      }
      resolve(`Login match : ${results.row[0]}`)
    })
  })
}
const createPilot = (body) => {
    return new Promise(function(resolve, reject) {
        const { ID, name } = body
        pool.query('INSERT INTO Pilot (ID, Name) VALUES ($1, $2) RETURNING *', [ID, name], (error, results) => {
        if (error) {
            reject(error)
        }
        resolve(`Pilot added : ${results.rows[0]}`)
        })
    })
}

const deletePilot = () => {
    return new Promise(function(resolve, reject) {
      const ID = parseInt(request.params.ID)
      pool.query('DELETE FROM Pilot WHERE ID = $1', [ID], (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(`Pilot deleted with ID: ${ID}`)
      })
    })
}

module.exports = {
    getFlights,
    registerCustomer,
    loginCustomer,
    //createPilot,
    //deletePilot,
  }