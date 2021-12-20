import React from 'react';
import  {useState,useEffect} from 'react'
const Api = () => {
    const [items, setItems] = useState([]);

    useEffect( () =>{
        fetch('https://randomuser.me/api')
            .then(res => res.json())
            .then(result => setItems(result.results))
        },[])

        console.log(items.email)

    return (
        <div>
            <div>
                <h1>Api</h1>
                <ul>
                    {items.map(item => (
                        <li key={item.email}>
                            {`${item.name.first} ${item.name.last}: ${item.dob.age} age, cell: ${item.cell}`}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Api


