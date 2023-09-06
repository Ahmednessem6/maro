import React, { useState, useEffect } from 'react';
 import { useNavigate } from 'react-router-dom';
  
  export default function LoginUser ()  {
  const [email, setEmail] = useState('');
  const navigate =useNavigate()
  const handleLogin = () => {
  const user = { email };
  const url = '/api/login';
  const options = {
  method: 'POST',
  body: user,
  };
  localStorage.setItem("emailUser",email)
  navigate("/")
  
  };
  
  return (
  <div style={{ backgroundColor: '#EAEBF0',width:"100%",height:"100vh", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
  <form onSubmit={handleLogin}>
  <label htmlFor="email">Email:</label>
  <input
  id="email"
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  style={{ backgroundColor: '#F0F8F3' }}
  />
  
      <button type="submit" style={{ backgroundColor: '#F0BD41' }}>Login</button>
    </form>
  
  </div>
  )
  
  

  }