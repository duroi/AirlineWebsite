import React, {useState, useEffect} from 'react';

function App() {
  const [Flights, setFlights] = useState(false);

  useEffect(() => {
    getFlight();
  }, []);

  function getFlight() {
    fetch('http://localhost:3001')
      .then(response => {
        return response.text();
      })
      .then(data => {
        setFlights(data);
      });
  }

  
  function createFlight() {
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
  }


  return (
    <div>
      {Flights ? Flights : 'There is no Flight data available'}
      <br />
      <button onClick={createFlight}>Add</button>
      <br />
      <button onClick={deleteFlight}>Delete</button>
    </div>
  );

}

export default App;