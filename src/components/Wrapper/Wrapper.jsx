import React, {useState} from 'react';
import {  Route, Routes, Link} from "react-router-dom";
import Action from "../Action/Action";
import {View} from "../View/View";
import Test from "./Test/Test";

 const Wrapper = () => {

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

                <div>
                    <Routes>
                        <Route path="/test" element={<Test />}/>
                    </Routes>
                </div>

        </div>

    )
}
 export default Wrapper
