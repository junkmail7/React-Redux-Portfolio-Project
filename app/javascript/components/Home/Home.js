import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom'
import DisplayUser from '../Users/DisplayUser'
import styled from 'styled-components'

const Background = styled.div`
background-color: #2b91af;
color: #fff;
text-align: center;
padding: 7px;
font-family: sans-serif;
`
const Body = styled.div`
background-color: #0077cc;
`

const Home = () => {
    return (
        <div className="links">
            <Body>
            <h3>Welcome To SkateTrick Logger</h3>
            <Background>
            <DisplayUser/>
            <div className="login"><Link to={'/signin/'}>Sign Up/Log In</Link></div>
            <div className="login"><Link to={'/log/'}>View your TrickLog</Link></div>
            <div className="tricks"><Link to={'/tricks/'}>View all the tricks</Link></div>
                
            </Background>
            </Body>
        </div>
    )
}

export default Home