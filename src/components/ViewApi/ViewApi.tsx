import React from 'react';


interface PropsUser {
    props?: any

}




export const ViewApi: React.FC<PropsUser> = ({ props }) => {
    console.log(props, 'apiprops')
    return (
        <div>
            <div>
                <h1>Api</h1>
                <ul>
                    {
                        props.map((user: any) => (
                            <li key={user.email}>
                                {`${user.name.first} ${user.name.last}: ${user.dob.age} age, cell: ${user.cell}`}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}




