import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from "react";

const colors = {
  background: '#EAEBF0',
  button: '#F0BD41',
  title: '#000000',
  child: '#F0F8F3'
};

const LoginAdmin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/v1/use/login', { email, password });
      localStorage.setItem('token', response.data.token);
      navigate("/HomeDash");

      // Redirect to dashboard or protected route
    } catch (error) {
      setError('Invalid email or password');
    }
  };

  return (
    <div
      style={{
        background: colors.background,
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '50px', background: colors.child, borderRadius: '10px' }}>
        <h2 style={{ color: colors.title, marginBottom: '20px' }}>Login</h2>
        <label style={{ color: colors.title, margin: '10px 0', fontSize: '16px' }}>
          Email:
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            style={{
              padding: '5px',
              borderRadius: '5px',
              border: 'none',
              backgroundColor: colors.child,
              color: colors.title,
              fontSize: '16px',
              margin: '0 0 10px 10px'
            }}
          />
        </label>
        <label style={{ color: colors.title, margin: '10px 0', fontSize: '16px' }}>
          Password:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            style={{
              padding: '5px',
              borderRadius: '5px',
              border: 'none',
              backgroundColor: colors.child,
              color: colors.title,
              fontSize: '16px',
              margin: '0 0 10px 10px'
            }}
          />
        </label>
        {error && <div style={{ color: 'crimson', margin: '10px' }}>{error}</div>}
        <button
          type="submit"
          style={{ backgroundColor: colors.button, padding: '10px 20px', borderRadius: '5px', border: 'none', color: colors.title, fontSize: '16px', cursor: 'pointer', marginBottom: '10px' }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginAdmin;
