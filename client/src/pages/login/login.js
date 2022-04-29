import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

var fetchSuccess = false;

async function loginValidate(loginInfo) {
  
  return fetch('http://localhost:3001/loginValidate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(loginInfo)
  })
  .then(response => {
    console.log(response, "Response");

    if(response.status === 401) {
      localStorage.removeItem("token");

    }

    return response.json();

  })
  .then(data => {
    console.log(data, "Data")

    if (data) {

      fetchSuccess = true;

    }
  });
}

async function loginSuccess(loginInfo) {
  return fetch('http://localhost:3001/loginSuccess', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(loginInfo)
  })
    .then(data => data.json())
 }

export default function Login({setToken}) {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    console.log(email)
    console.log(password)

    try {
      alert(
          "Your email: " +
          email +
          "\nYour Password: " +
          password
      );
    const authenticate = await loginValidate({email, password});
    console.log(authenticate);

    if(fetchSuccess) {

      alert("Login success!");
      const token = await loginSuccess({email, password});
      console.log(token)
      setToken(token);
      console.log(token);

    }
    else{

      alert("No match for login credentials found");

    }
    
  } catch (error) {

    console.log(error.message);
    
  }
}
  

  return (
     
    <div>
      <h1>Welcome</h1>
      <h2>Login:</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Enter an email:
          <input 
            name="email"
            type="text"
            username={email}
            onChange={e => setEmail(e.target.value)}
            />
        </label>
        <br></br>
        <br></br>

        <label>
          Enter a password:
        <input
          name="password"
          type="password"
          password={password}
          onChange={e => setPassword(e.target.value)}
          />
        </label>
        <label />
        <br></br>
        <br></br>
        <input type="submit" value ="Submit"/>

      </form>

        <p> Don't have an account? Register here</p>
        <a href = "/Register">
        <button>
          Register
        </button>
        </a>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};