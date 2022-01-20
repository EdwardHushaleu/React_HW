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
        case 'set-error':
            return {...state, error: action.error };
        case 'set-isloaded':
            return { ...state, isLoaded: action.isLoaded };
        case 'set-users':
            return { ...state,users: action.users }
        default:
            throw new Error();
    }

}

export const ApiRequest: React.FC = () => {
    // const [error, setError] = useState<ErrorEvent>(null!);
    // const [isLoaded, setIsLoaded] = useState<boolean>(false);
    // const [users, setUsers] = useState<Array<IUser>>([]);
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {

        fetch('https://randomuser.me/api/?results=5')
            .then(res => res.json())
            .then(
                result => dispatch({type: 'set-users', users: result.results }),
                (error) => dispatch({type: 'set-error', error: error }),
            )
            .finally(()=> dispatch({type: 'set-isloaded', isLoaded: true }))
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




