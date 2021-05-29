import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../stores';

const CalculationField = observer(() => {
  const { calculatorStore } = useStore();

  return (
    <div className="calculations">
      {calculatorStore.calculations}
    </div>
  )
})

export default CalculationField;