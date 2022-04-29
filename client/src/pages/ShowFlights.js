import React, {useState, useEffect} from 'react'
import BookFlight from './BookFlight';
import useToken from '../components/token/useToken';

function ShowFlights(props) {
  const { token, setToken} = useToken();

  
  const[isBooking, setIsBooking] = useState(false);
  const[currentFlightNumber, setCurrentFlightNumber] = useState(0)
  
  // Make sure to use props when multiple props are being used
  let flightsParsed = JSON.parse(props.flights);
  let bookingsParsed = JSON.parse(props.bookings);
  let modelsParsed = JSON.parse(props.models);

  let book = (flightNum) => {
    setCurrentFlightNumber(flightNum)
    console.log(flightNum)
    setIsBooking(true)
  }

  const backButton = () =>  {
    setIsBooking(false)
  }

  function bookFlight() {
    fetch('http://localhost:3001/book', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({flightnum: currentFlightNumber,
                            customerthatbooked: token.email,
                            customerflying: token.email}),
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        console.log(data);
      });
   setIsBooking(false)  
  }
  

  return (
    <div>
    {isBooking ? 
      <div>
        <p> Flight Number: {currentFlightNumber} <br />
            Confirm that this is the flight you want to book. <button onClick={() => bookFlight()}>Book Flight</button> <br/><br/>
            <button onClick={() => setIsBooking(false)}>Back</button>
        </p>
      </div>
    : 
      <div> 
        <h2>Select a flight from the below list to book.</h2>
        {flightsParsed.map((element) => {
          return  <p>
            Flight number:  {element.flightnum} &nbsp;
            Arrive Airport: {element.arriveairport} &nbsp;
            Depart Airport: {element.departairport} &nbsp;
            Date arriving:  {element.datearrive.substring(0,10)} &nbsp;
            Time arriving:  {element.timearrive.substring(0,8)} &nbsp;
            Date departing: {element.datedepart.substring(0,10)} &nbsp;
            Time departing: {element.timedepart.substring(0,8)} <br />
            <button onClick={() => {book(element.flightnum)}}>Book me</button> </p>
          })
        }

        <h2>Here are your current bookings: </h2>
          {console.log(bookingsParsed)}
          {bookingsParsed.map((element) => {
            return <p>
              Flight Number: {element.flightnum} </p>
            })
          }

          {modelsParsed.map((element) => {
            return <p>
              Aircraft Model: {element.model} </p>
            })
          }
          </div>
        }

    </div>
  )
}

export default ShowFlights
