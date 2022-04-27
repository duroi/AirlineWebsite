import React, {useState, useEffect} from 'react'
import BookFlight from './BookFlight';

function ShowFlights(flights) {

  const[isBooking, setIsBooking] = useState(false);
  const[currentFlightNumber, setCurrentFlightNumber] = useState(0)

  let flightsParsed = JSON.parse(flights.flights);

  let book = (flightNum) => {
    setCurrentFlightNumber(flightNum)
    console.log(flightNum)
    setIsBooking(true)
  }

  let back = () =>  {
    setIsBooking(false)
  }

  return (
    
    <div>
      {isBooking ? 
        <BookFlight flightNumber={currentFlightNumber} back={back}/> 
                 : <div> 
                   Select a flight from the below list to book. <br />
              {
            
            flightsParsed.map((element) => {
            return  <p>
                Flight number:  {element.flightnum} &nbsp;
                Arrive Airport: {element.arriveairport} &nbsp;
                Depart Airport: {element.departairport} &nbsp;
                Date arriving:  {element.datearrive.substring(0,10)} &nbsp;
                Time arriving:  {element.timearrive.substring(0,8)} &nbsp;
                Date departing: {element.datedepart.substring(0,10)} &nbsp;
                Time departing: {element.timedepart.substring(0,8)} <br />
                <button onClick={() => {book(element.flightnum)}}>Book me</button> 
                  </p>
              }
          )
            }
          </div>
          }
        
        
        {
        }
        
            
           
                
        
    
    </div>
  )
}

export default ShowFlights

//