import React from 'react';
import linkedinLogo from '../images/LinkedIn_logo_initials.png';
import githubLogo from '../images/github.logo.png'


const Footer = () => {
  const footerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
    borderTop: '2px solid #ddd',
    marginTop: '20px',
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    margin: '0 10px',
  };

  const smallTextStyle = {
    fontSize: '14px',
  };

  return (
    <footer style={footerStyle}>
      <div>
        <a href="https://www.linkedin.com/in/nathalyquiva/" target="_blank" rel="noopener noreferrer" style={linkStyle}>
          <img src={linkedinLogo} alt="LinkedIn Logo" style={{ width: '30px', height: '30px' }} />
        </a>
        <a href="https://github.com/NathalyQuiva" target="_blank" rel="noopener noreferrer" style={linkStyle}>
          <img src={githubLogo} alt="GitHub Logo" style={{ width: '30px', height: '30px' }} />
        </a>
      </div>
      <p style={smallTextStyle}>Creado por Nathaly Quiva</p>
    </footer>
  );
};

export default Footer;
