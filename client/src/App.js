import React, {useState, useEffect} from 'react';
import BookFlight from './BookFlight';
import ShowFlights from './ShowFlights';

function App() {
  const [Flights, setFlights] = useState(false);
  //const [user, setUser] = useState();
  const [Bookings, setBookings] = useState(false);
  const [Models, setModels] = useState(false);

  useEffect(() => {
    getFlight();
    getBookings();
    getModels();
  }, []);

  function getFlight() {
    fetch('http://localhost:3001/')
      .then(response => {
        return response.text();
      })
      .then(data => {
        setFlights(data);
      });
  }

  
  function getBookings() {
    fetch('http://localhost:3001/bookings')
      .then(response => {
        return response.text();
      })
      .then(data => {
        setBookings(data);
      });
  }

  function getModels() {
    fetch('http://localhost:3001/models')
      .then(response => {
        return response.text();
      })
      .then(data => {
        setModels(data);
      });
  }

  
  /*function createFlight() {
    let name = prompt('Enter Flight name');
    let email = prompt('Enter Flight email');

    fetch('http://localhost:3001/Flights', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name, email}),
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        alert(data);
        getFlight();
      });
  }

  function deleteFlight() {
    let id = prompt('Enter Flight id');

    fetch(`http://localhost:3001/Flights/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        alert(data);
        getFlight();
      });
  }*/


  return (
    <div>
     {console.log("in app.js bookings is " + Bookings)}
      {Flights && Bookings && Models ?
                <ShowFlights flights={Flights} bookings={Bookings} models={Models}/>
              :
              <p>404 not found.</p>
      }
      
    </div>
  );

}

export default App;