import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchUser } from '../../redux/AddUser/adduser-actions'
import {BrowserRouter as Router, Link} from 'react-router-dom'
import styled from 'styled-components'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Background = styled.div`
background-color: #2b91af;
text-align: center;
padding: 7px;
font-family: sans-serif;
`

const Header = styled.h3`
background: #0077cc;
color: #black;
`

toast.configure()
const User = () => {
    const dispatch = useDispatch()
    let name = ""

    const handleSubmit = (e) => {
        e.preventDefault()
        //console.log(name)
        dispatch(fetchUser(name))
        toast.success('You have logged in.', {position: toast.POSITION.TOP_RIGHT})
    }

    const handleChange = (e) => {
        e.preventDefault()
        name = e.target.value
    }
    return (
        <Background>
        <div className="signup">
            <Header>Sign Up or Log In</Header>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter a username" onChange={handleChange}></input>
                <button type="submit">Submit</button>
                <div><Link to={'/'}>Return to Home page once logged in</Link></div>
            </form>
        </div>
        </Background>
        
    )
    
}

export default User