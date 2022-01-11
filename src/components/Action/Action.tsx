import React from 'react';

interface PropsFooCounter {
    plusCounter: (arg: boolean) => void;
}


const Action: React.FC<PropsFooCounter> = (plusCounter) => {
    console.log(plusCounter)
    return (
        <div>
            <button onClick={() => {
                plusCounter.plusCounter(true)
            }}>
                Click +
            </button>
            <button onClick={() => {
                plusCounter.plusCounter(false)
            }}>
                Click -
            </button>
        </div>
    )
}

export default Action



