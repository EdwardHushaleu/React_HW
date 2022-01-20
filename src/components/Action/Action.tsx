import React,{} from 'react';


const Action: React.FC<{plusCounter: (arg: boolean) => void}> = (plusCounter) => {
    
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



