import React from 'react';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="content">
        <h1>Welcome to My Website</h1>
        <p>This is a minimalist React website.</p>
      </main>
    </div>
  );
}

export default App; 