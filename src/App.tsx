import React from 'react';

import './App.css';

import CalculationField from './components/CalculationField';
import ResultField from './components/ResultField';
import Keyboard from './components/Keyboard';

function App() {
  return (
    <div className="App">
      <CalculationField />
      <ResultField />
      <Keyboard />
    </div>
  );
}

export default App;
