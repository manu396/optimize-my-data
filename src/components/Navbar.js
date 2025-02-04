import React from 'react';

function Navbar() {
  return (
    <nav style={navStyle}>
      <div style={logoStyle}>My Website</div>
      <ul style={menuStyle}>
        <li><a href="#home" style={linkStyle}>Home</a></li>
        <li><a href="#about" style={linkStyle}>About</a></li>
        <li><a href="#contact" style={linkStyle}>Contact</a></li>
      </ul>
    </nav>
  );
}

const navStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem 2rem',
  backgroundColor: '#333',
  color: 'white',
};

const logoStyle = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
};

const menuStyle = {
  display: 'flex',
  listStyle: 'none',
  margin: 0,
  padding: 0,
  gap: '2rem',
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
};

export default Navbar; 