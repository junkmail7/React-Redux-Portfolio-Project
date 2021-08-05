import React from 'react'
import { useSelector } from 'react-redux'

const DisplayUser = () => {
    const user = useSelector((state) => state.currentUser.user)
    let name = "Please Sign In"
    if (user != undefined)
    {
        name = user.data.attributes.name
    }
    return (
        <div className="user">
            <p>Current User: {name}</p>
        </div>
    )
    
}

export default DisplayUser