import React, {useEffect, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from '../../redux/AddUser/adduser-actions';
import { updateUserTrick, fetchUserTricks} from '../../redux/AddUserTricks/addusertrick-actions';

const UserTricks = () => {
    const user = useSelector((state) => state.currentUser.user.data)
    const userName = user.attributes.name
    const userId = user.id

    const userTricks = useSelector((state) => state.currentUser.user.data.attributes.tricks)
    const userTricksInfo = useSelector((state) => state.currentUser.user.data.relationships.user_tricks.data)
    const alluserTricks = useSelector((state) => state.userTricks.usertricks.data)
    
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchUser(userName))
        dispatch(fetchUserTricks())
    }, [])
    
    let currentusersusertricks = []
    let renderList = null
    let slider = 0
    
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
        i = i + 1

        return(
            <Fragment>
            <div className="trick-card" key={id}>
                <div className="trick-name" key={name}>Name: {name}</div>
                <div className="trick-difficulty" key={difficulty}>Difficulty: {difficulty}</div>
                <div className="trick-type" key={type_of_trick}>Type: {type_of_trick}</div>
                <div className="trick-proficiency" key={prof}>Proficiency: {prof}</div>
                <input onChange={handleChange} type="range" min="1" max="10" ></input>
                <button onClick={handleSubmit} type="submit">Submit Changes</button>
            </div>
            </Fragment>
        )
    })
    }
    return <><p key="header">{userName}'s tricks:</p> { renderList }</>
}

export default UserTricks