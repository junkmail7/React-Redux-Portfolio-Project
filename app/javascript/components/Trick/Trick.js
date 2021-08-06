import React, { useEffect } from 'react'
import { useParams, BrowserRouter as Router, Link } from 'react-router-dom' 
import TrickDetails from './TrickDetails'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTrick } from '../../redux/AddTricks/addtricks-actions'
import { fetchUserTrick } from '../../redux/AddUserTricks/addusertrick-actions'
import styled from 'styled-components'

const Header = styled.h3`
background: #0077cc;
`

const Trick = () => {
    const user = useSelector((state) => state.currentUser.user.data)
    const userId = user.id 
    const { id } = useParams()
    //console.log(userId, id)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchTrick(id))
    }, [])

    const handleButton = (e) =>{
        e.preventDefault()
        dispatch(fetchUserTrick(userId, id))
    }
    
    return (
    <div>
        <Header>Trick Info: 
        <div><Link to={'/'}>Home</Link></div>
        <div><Link to={'/tricks'}>Back</Link></div>
        </Header>
        { <TrickDetails handleButton={handleButton}/> }
    </div>
    )
}

export default Trick