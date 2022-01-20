import React from 'react';
import { useState, useEffect, useReducer } from 'react'
import { ViewApi } from '../../components/ViewApi/ViewApi';

interface IUser {
    name: {
        first: string,
        last: string,
    }

    dob: {
        age: number;
    }

    cell: number;
    email: string;
}


const initialState = {
    error: null,
    isLoaded: false,
    users: [],
};

function reducer(state: any, action: any) {
    switch (action.type) {
        case 'error':
            return { ...state, error: action.error };
        case 'is_loaded':
            return { ...state, isLoaded: action.isloaded };
        case 'users':
            return { ...state, users: action.users };
        default:
            throw new Error();
    }
}

// function reducer(state: any, action: any) {
//     switch (action.type) {
//         case 'error':
//             return { ...state, error: action.error };
//         case 'is_loaded':
//             return { ...state, isLoaded: action.isLoaded };
//         case 'users':
//             return { ...state, users: action.users };
//         default:
//             throw new Error();
//     }
// }//

export const ApiRequest: React.FC = () => {
    // const [error, setError] = useState(null);
    // const [isLoaded, setIsLoaded] = useState(false);
    // const [users, setUsers] = useState([]);
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {

        fetch('https://randomuser.me/api/?results=5')
            .then(res => res.json())
            .then(
                result => dispatch({type: 'users', users: result.results }),
                (error) => dispatch({type: 'error', error: error }),
            )
            .finally(()=> dispatch({type: 'is_loaded', isLoaded: true }))
    }, [])

    if (!state.isLoaded) {
        return <div>Загрузка...</div>
    }

    if (state.error) {
        return <div>Ошибка {state.error.message}</div>
    }

    return (
        <div>
            <ViewApi props={state.users} />
        </div>
    )
}




