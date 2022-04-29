import React, {useState, useEffect} from 'react';

import {Routes, Route, Navigate, Router, Redirect} from "react-router-dom";

import Login from "./pages/login/login";
import Register from "./pages/registration/registration"
import ShowFlights from './pages/ShowFlights';
import BookFlight from './pages/BookFlight';

import useToken from "./components/token/useToken";

const App = () => {
  const { token, setToken} = useToken();
  const [Flights, setFlights] = useState(false);
  const [Bookings, setBookings] = useState(false);
  const [Models, setModels] = useState(false);

  useEffect(() => {
    if (token){
      getFlight();
      getBookings();
      getModels();
    }
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
    fetch('http://localhost:3001/bookings',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({customerthatbooked: token.email}),
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        setBookings(data);
      });
  }

  function getModels() {
   fetch('http://localhost:3001/models',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({customerthatbooked: token.email}),
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        setModels(data);
      });
  }


  //Check for token, redirect to login page if false.
  if(!token) {

    return(
        <Routes>
                  

          <Route path="/" element= {<Login setToken ={setToken}/>}></Route>
          <Route path="/Register" element = {<Register />}></Route>

        </Routes>
    );
    
  }

  //Check for token, redirect to book flights page if true.
  else if (token){
    return(
      <Routes>
          <Route path="/BookFlights" element = {<BookFlight />}></Route>
          {console.log(token.email)}
          {console.log(Bookings)}
          {console.log(Models)}


          <Route path="/" element = {Flights && Bookings && Models ? <ShowFlights flights={Flights} bookings={Bookings} models={Models}/> : <div>No Flights Available</div>}></Route>
          <Route path="/Register" element = {<Register />}></Route>

      </Routes>
    );
  }
}
export default App

//           <button onClick={() => setToken(false)}></button>
