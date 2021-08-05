import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom' 
import TrickDetails from './TrickDetails'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTrick } from '../../redux/AddTricks/addtricks-actions'
import { fetchUserTrick } from '../../redux/AddUserTricks/addusertrick-actions'

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
    <div>Trick Info
        { <TrickDetails handleButton={handleButton}/> }
    </div>
    )
}

export default Trick