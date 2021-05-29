import React from 'react';
import { observer } from 'mobx-react-lite';

import { useStore } from '../stores';


const ResultField = observer(() => {
  const { calculatorStore } = useStore();

  return (
    <div className="result">
      {calculatorStore.result}
    </div>
  )
})

export default ResultField;