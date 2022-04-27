import React, { useState } from "react";



const Register = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNum, setPhoneNum] = useState("");
    const [address, setAddress] = useState("");
    const [fname, setfName] = useState("");
    const [lname, setlName] = useState("");
  
  
      return (
        <div>
            <h1>Registration</h1>
        </div>
      );
  }
  
  export default Register;