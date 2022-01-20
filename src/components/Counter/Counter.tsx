import React, { useState } from 'react';
import Action from "../Action/Action";
import { View } from "../View/View";

export const Counter: React.FC = () => {

    let [counter, setCounter] = useState<number>(0);

    const plusCounter1 = (arg: boolean) :void => {
        (arg) ? setCounter(++counter) : setCounter(--counter);
    }

    return (
        <div>
            <Action
                plusCounter={plusCounter1}
            />
            <View
                counter={counter}
            />
        </div>
    )
}

