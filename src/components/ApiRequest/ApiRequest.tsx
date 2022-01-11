import React from 'react';
import { useState, useEffect } from 'react'
import { ViewApi } from '../ViewApi/ViewApi';

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


export const ApiReques: React.FC = () => {
    const [error, setError] = useState<ErrorEvent>(null!);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [users, setUsers] = useState<Array<IUser>>([]);

    useEffect(() => {

        fetch('https://randomuser.me/api/?results=5')
            .then(res => res.json())
            .then(result => {
                setIsLoaded(true);
                setUsers(result.results);
                console.log(result.results, 'requestAPi')
            },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                    console.log(error)
                }
            )
    }, [])

    

    if (!isLoaded) {
        return <div>Загрузка...</div>
    }

    if (error) {
        return <div>Ошибка {error.message}</div>
    }

    console.log(users)

    return (
        <div>
            <ViewApi props={users}/>
        </div>
    )
}



