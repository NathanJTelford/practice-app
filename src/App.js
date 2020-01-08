import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      this is app
      <Link to='/madLib'>Mad Lib</Link>
      </header>
    </div>
  );
}

export default App;
