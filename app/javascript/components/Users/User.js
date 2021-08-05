import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchUser } from '../../redux/AddUser/adduser-actions'
import { Redirect } from 'react-router-dom'

const User = () => {
    const dispatch = useDispatch()
    let name = ""

    const handleSubmit = (e) => {
        e.preventDefault()
        //console.log(name)
        dispatch(fetchUser(name))
    }

    const handleChange = (e) => {
        e.preventDefault()
        name = e.target.value
    }
    return (
        <div className="signup">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter a username" onChange={handleChange}></input>
                <button type="submit">Sign Up/Log In</button>
            </form>
        </div>
    )
    
}

export default User