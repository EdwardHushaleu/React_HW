import React from 'react';

export const Action = ({ minusCounter, plusCounter }) => {

    return (
        <div>
            <button onClick={() => {
                plusCounter()
            }}>
                Click +
            </button>
            <button onClick={() => {
                minusCounter()
            }}>
                Click -
            </button>
        </div>
    )
}



