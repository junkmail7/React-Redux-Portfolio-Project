import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom'
import DisplayUser from '../Users/DisplayUser'

const Home = () => {
    return (
        <div className="links">
            <DisplayUser/>
            <div className="login"><Link to={'/signin/'}>Sign Up/Log In</Link></div>
            <div className="login"><Link to={'/log/'}>View your TrickLog</Link></div>
            <div className="tricks"><Link to={'/tricks/'}>View all the tricks</Link></div>
        </div>
    )
}

export default Home