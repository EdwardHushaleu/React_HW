import React from 'react';

interface PropsCounter{
    counter: number;
}

export const View: React.FC<PropsCounter> = (counter) => {

    return (
        <div>
            Clicks how much {counter.counter}
        </div>
    )

}

