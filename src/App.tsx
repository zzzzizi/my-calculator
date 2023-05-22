import React from 'react';

import './App.css';
import { Calculator } from './calculator/calculator';
import { Screen } from './screen/screen';

function App() {
  return (
    <div className="App">
      <div className="calculator-d">calculator</div>
      <Screen />
      <Calculator />
    </div>
  );
}

export default App;
