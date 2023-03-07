import axios from "axios";
import { Link } from "react-router-dom";
import React, {useState} from "react";
import NavBar from "../components/NavBar";
import './PagesStyles.css';




const Login = () => {


  // States for registration
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
 
 
  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if ( email === '' || password === '') {
      setError(true);
    } else {
        signin()
      setSubmitted(true);
      setError(false);
    }
  };

  function signin () {
    axios({
        method: 'post',
        url: 'Http://gym.fadiramzi.dev/api/web/v1/auth/login',
        data: {
          email: email,
          password: password 
        }
      }).then((response) => {
        console.log(response.data)
      }).catch((err) => {
        console.log(err);
      }) ;
  }
 
  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}>
        
      </div>
    );
  };
 
  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? '' : 'none',
        }}>
        <h1>Please enter all the fields</h1>
      </div>
    );
  };

  return (
    <>
    <NavBar/>

    <div className="form">
      <div className="title">
        <h1>Register</h1>
      </div>
 
      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>
 
      <form className="register-form">
        {/* Labels and inputs for form data */}
       
 
        <label className="label">Email</label>
        <input onChange={handleEmail} className="input"
          value={email} type="email" />
 
        <label className="label">Password</label>
        <input onChange={handlePassword} className="input"
          value={password} type="password" />
 
        <button onClick={handleSubmit} className="btn" type="submit">
          <Link to="/verify">Submit</Link>
        </button>
      </form>

      <div className="other-sign-link">Don't have an account? <Link to="/register">Sign up</Link></div>
    </div>


    </>
  );
};

export default Login;