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

/*
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
*/
module.exports = {
    getFlights,
    //createPilot,
    //deletePilot,
  }