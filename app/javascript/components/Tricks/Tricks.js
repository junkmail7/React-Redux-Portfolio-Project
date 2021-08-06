import React, { useEffect, Fragment } from 'react'
import { useDispatch } from 'react-redux'
import { fetchTricks } from '../../redux/AddTricks/addtricks-actions'
import {BrowserRouter as Router, Link} from 'react-router-dom'
import Trick from './TricksInfo'
import styled from 'styled-components'

const Container = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;

text-align: center;

font-family: sans-serif;
color: #fff;
background: gray;
padding: 7px;
`

const Header = styled.h3`
background: #0077cc;
`

const Tricks = () => {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchTricks())
    }, [])

    return (
        <Fragment>
        <Header>List of tricks
        <div><Link to={'/'}>Home</Link></div>
        </Header>
        <Container>
        <Trick />
        </Container>
        </Fragment>
    )
}

export default Tricks