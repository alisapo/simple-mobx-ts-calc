import React, { FC } from 'react';
import { observer } from 'mobx-react-lite';

import { useStore } from '../stores';


const Keyboard: FC = observer(() => {

  const keyboardItems = [
    'AC', 'DEL', '/', '7', '8', '9', '*', '4', '5', '6', '+', '1', '2', '3', '-', '.', '0', '='
  ];

  const { calculatorStore } = useStore();

  return (
    <div className="keyboard">
      {
        keyboardItems.map((item: any) => (
          <button
            className="keyboard-buttons"
            key={item}
            onClick={() => calculatorStore.addValue(item)}
          >
            {item}
          </button>
        ))
      }
    </div>
    )
  }
)

export default Keyboard;
