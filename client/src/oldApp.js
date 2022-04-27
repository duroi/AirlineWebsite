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



  return (
    <div>
      <h1>Welcome</h1>
      <p>Login:</p>

      <form onSubmit={handleSubmit}></form>
    </div>
  );

}

export default App;