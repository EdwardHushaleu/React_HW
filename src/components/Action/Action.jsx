import React from 'react';

export const Action = ({ plusCounter }) => {

    return (
        <div>
            <button onClick={() => {
                plusCounter(true)
            }}>
                Click +
            </button>
            <button onClick={() => {
                plusCounter(false)
            }}>
                Click -
            </button>
        </div>
    )
}



