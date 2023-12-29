import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'quiva@noteApp' && password === '101010') {
      onLogin();
    } else {
      alert('Incorrect username or password. Try again.');
    }
  };

  const loginContainerStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '25vw', // Ajusta el ancho según tus preferencias
    padding: '20px',
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Fondo con opacidad
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    zIndex: '999', // Asegura que esté por encima del resto del contenido
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <div style={loginContainerStyle}>
      <h2 style={{ textAlign: 'center', color: '#333' }}>Login</h2>
      <label htmlFor="username" style={{ display: 'block', margin: '10px 0' }}>Username:</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={inputStyle}
      />
      <br />
      <label htmlFor="password" style={{ display: 'block', margin: '10px 0' }}>Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={inputStyle}
      />
      <br />
      <button onClick={handleLogin} style={buttonStyle}>Login</button>
    </div>
  );
};

export default Login;
