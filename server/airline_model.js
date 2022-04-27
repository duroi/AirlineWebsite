const pool = require("./db");

//Database Queries
const getFlights = () => {
    return new Promise(function(resolve, reject) {
      pool.query('SELECT flightnum, airport1.code AS arriveairport, airport2.code AS departairport, datearrive, timearrive, datedepart, timedepart FROM flight JOIN airport as airport1 on arriveairport = airport1.airportid JOIN airport as airport2 ON departairport = airport2.airportid;', (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(results.rows);
      })
    }) 
  }

  const getBookings = () => {
    return new Promise(function(resolve, reject) {
      pool.query(`SELECT flightnum FROM book WHERE customerthatbooked=test1@gmail.com;`, (error, results) => {
        //FIXME: in above query we are selecting where customerthatbooked=1, but it should be checking for the id of the currently logged in user
        // or, SELECT model, flightnum FROM book NATURAL JOIN flight WHERE customerthatbooked=1;
        if (error) {
          reject(error)
        }
        resolve(results.rows);
      })
    }) 
  }

  const getModels = () => {
    return new Promise(function(resolve, reject) {
      pool.query('SELECT model FROM book NATURAL JOIN FLIGHT WHERE customerthatbooked=test1@gmail.com;', (error, results) => {
      if(error) {
        reject(error)
      }
      resolve(results.rows);
    })
  })
}

const addBooking = (body) => {
  return new Promise(function(resolve, reject) {
    const { flightnum,customerthatbooked,customerflying } = body
      pool.query('INSERT INTO book (flightnum,customerthatbooked,customerflying) VALUES ($1, $2, $3)', [flightnum,customerthatbooked,customerflying], (error, results) => {
        if(error) {
          reject(error)
        }
      // Below line is data in the fetch function bookFlight
      resolve(`Flight number ${flightnum} added for user ${customerthatbooked}`)
    })
  })
}

const registerCustomer = (body) => {
  return new Promise(function(resolve, reject) {
    const { dob,email,password,fname,lname } = body
    pool.query('INSERT INTO customer (dob,freqflynum,password,fname,lname) VALUES ($1, $2, $3, $4, $5)', [dob,email,password,fname,lname], (error, results) => {
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
/*const createPilot = (body) => {
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
}*/

// fixme: look up a flight three letter code given flight number


module.exports = {
    getFlights,
    addBooking,
    getModels,
    getBookings,
    registerCustomer,
    loginCustomer,
    //createPilot,
    //deletePilot,
  }