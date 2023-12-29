import React from 'react';


const Header = () => {
  const headerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '1em',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    borderBottom: '2px solid #ddd',
  };

  const titleStyle = {
    margin: '0',
  };

  return (
    <header style={headerStyle}>
      <h1 style={titleStyle}>MY ENSOLVERS NOTES APP</h1>
    </header>
  );
};

export default Header;