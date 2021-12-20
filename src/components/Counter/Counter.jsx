import React, { useState } from 'react';
import Action from "../Action/Action";
import View from "../View/View";

const Counter = (props) => {

    let [counter, setCounter] = useState(0);

    const plusCounter = (arg) => {
        (arg) ? setCounter(++counter) : setCounter(--counter);
    }

    return (
        <div>
            <Action
                plusCounter={plusCounter}
            />
            <View
                counter={counter}
            />
        </div>
    )
}

export default Counter