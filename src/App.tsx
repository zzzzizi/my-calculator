import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Calculator } from './components/calculator';
import { Screen } from './components/screen';

function App() {
  return (
    <div className="App">
      <div>calculator</div>
      <Screen />
      <Calculator />
    </div>
  );
}

export default App;
