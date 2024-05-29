import React, { useState } from 'react'
import './CSS/SigninSignup.css'
const SigninSignup = () => {

  const [state, setState] = useState("Sign in");

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const changeHandle =  (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const Signup = async () => {
    console.log("Sign in Function Executed", formData);
    let responeData;
    await fetch('http://localhost:4000/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData),
    }).then((res) => res.json()).then((data) => responeData = data)
    
    if(responeData.success) {
      localStorage.setItem('auth-token', responeData.token);
      window.location.replace("/");
    }
    else {
      alert(responeData.error);
    }
  }
  const Signin = async () => {
    console.log("Sign up Function Executed", formData);
    let responeData;
    await fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData),
    }).then((res) => res.json()).then((data) => responeData = data)
    
    if(responeData.success) {
      localStorage.setItem('auth-token', responeData.token);
      window.location.replace("/");
    }
    else {
      alert(responeData.error);
    }
  }

  return (
    <div className='SigninSignup'>
      <div className='SigninSignup-container'>
        <h1>{state}</h1>
        <div className='SigninSignup-fields'>
          {state === "Sign up" ?<input name='username' value={formData.username} onChange={changeHandle} type='text' placeholder='Your Name' /> : <></>}
          <input name='email' value={formData.email} onChange={changeHandle}  type='email' placeholder='Email Address' />
          <input name='password' value={formData.password} onChange={changeHandle} type='password' placeholder='Password' />
        </div>
        <button onClick={() =>{state === "Sign in" ? Signin() : Signup()}}>Continue</button>
        {state === "Sign up" ? (
        <p className='SigninSignup-Signin'>Already have an account? <span onClick={() => setState("Sign In")}>Sign In here</span></p>
        ) : (
        <p className='SigninSignup-Signin'>Create an account? <span onClick={() => setState("Sign up")}>Click here</span></p>
        )}
        
        <div className='SigninSignup-agree'>
          <input type='checkbox' name='' id='' />
          <p>By continuing, i agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default SigninSignup
