import React from 'react';

import './app.css';
import { Calculator } from './calculator/calculator';
import { Screen } from './screen/screen';

function App() {
  return (
    <div className="app">
      <div className="tittle">calculator</div>
      <Screen />
      <Calculator />
    </div>
  );
}

export default App;
