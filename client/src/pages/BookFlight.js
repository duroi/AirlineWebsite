import React from 'react'

const BookFlight = (flightNumber, back) => {
  return (
      
    <div>
        {console.log(back)}
        <p>
            Flight Number: {flightNumber.flightNumber}
            <button onClick={() => back()}>Back</button>
        </p>
    </div>
  )
}

export default BookFlight