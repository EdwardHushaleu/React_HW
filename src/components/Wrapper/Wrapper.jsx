import React, { useState } from 'react';
import { Action } from "../Action/Action";
import { View } from "../View/View";

export const Wrapper = () => {

  let [counter, setCounter] = useState(() => 0);

  const plusCounter = () => {
    setCounter(counter + 1);
  }

  const minusCounter = () => {
    setCounter(counter - 1);
  }

  return (
    <div>
      <Action
        plusCounter={plusCounter}
        minusCounter={minusCounter}
      />
      <View
        counter={counter}
      />
    </div>
  )
}

