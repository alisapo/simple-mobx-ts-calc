import React from 'react';

import '../styles/App.css';

import CalculationField from './CalculationField';
import ResultField from './ResultField';
import Keyboard from './Keyboard';

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
