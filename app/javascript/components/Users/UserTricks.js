import React, {useEffect, Fragment, ReactDOM} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Redirect, BrowserRouter as Router, Link} from 'react-router-dom'
import { fetchUser } from '../../redux/AddUser/adduser-actions';
import { updateUserTrick, fetchUserTricks, deleteUserTrick} from '../../redux/AddUserTricks/addusertrick-actions';
import UserTrick from './UserTrick';
import styled from 'styled-components';

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

const UserTricks = () => {
    if (useSelector((state) => state.currentUser.user == null)){
        return <Redirect to="/"/>
    }
    const user = useSelector((state) => state.currentUser.user.data)
    const userName = user.attributes.name
    const userId = user.id
    
    const userTricks = useSelector((state) => state.currentUser.user.data.attributes.tricks)
    const userTricksInfo = useSelector((state) => state.currentUser.user.data.relationships.user_tricks.data)
    const alluserTricks = useSelector((state) => state.userTricks.usertricks.data)

    let currentusersusertricks = []
    let renderList = null
    let slider = 0
    
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchUser(userName))
        dispatch(fetchUserTricks())
    }, [])
    
    let x = 0
    if (alluserTricks != undefined)
    {
        while (x!=alluserTricks.length)
        {
            if (alluserTricks[x].attributes.user_id == userId)
            {
                currentusersusertricks.push(alluserTricks[x].attributes.proficiency)
                //console.log(currentusersusertricks, alluserTricks[x])
            }
            x = x+1
        }
    }
    //console.log(currentusersusertricks)

    if (userTricks != undefined)
    {
        let i = 0   
        renderList = userTricks.map((t) => {
        let { id, name, difficulty, type_of_trick} = t
        let usertrickId = userTricksInfo[i].id
        let prof = currentusersusertricks[i]
        //console.log(usertrickId)
        const handleChange = (e) => {
            e.preventDefault()
            slider = e.target.value
        }
        const handleSubmit = (e) => {
            e.preventDefault()
            console.log("Proficiency: ",slider,"user_id: ",userId,"trick_id: ",id,"user_trick_id: ",usertrickId)
            dispatch(updateUserTrick(userId, id, slider, usertrickId))
        }
        const handleRemove = (e) => {
            e.preventDefault()
            console.log("user_trick_id: ",usertrickId)
            dispatch(deleteUserTrick(usertrickId, userName))
        }
        i = i + 1

        return(
            <Fragment>
            <div className="trick-card" key={name}>
                <UserTrick name={name} difficulty={difficulty} type_of_trick={type_of_trick} prof={prof}/>
                <input onChange={handleChange} type="range" min="1" max="10" ></input>
                <button onClick={handleSubmit} type="submit">Submit Changes</button>
                <button onClick={handleRemove} type="submit">Remove Trick</button>
            </div>
            </Fragment>
        )
    })
    }
        return <>
        <Header key="header">{userName}'s tricks:
        <div><Link to={'/'}>Home</Link></div>
        </Header> 
        <Container>{ renderList }</Container>
        </>
}

export default UserTricks