import React from 'react';
import { Link } from 'react-router-dom';

 const Action = (props) => {

    return (
        <div>
            <button onClick={() => {
                props.plusCounter(true)
            }}>
                Click +
            </button>
            <button onClick={() => {
                props.plusCounter(false)
            }}>
                Click -
            </button>



        </div>
    )
}

export default Action



