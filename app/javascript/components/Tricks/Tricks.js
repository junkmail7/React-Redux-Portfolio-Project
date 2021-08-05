import React, { useEffect, Fragment } from 'react'
import { useDispatch } from 'react-redux'
import { fetchTricks } from '../../redux/AddTricks/addtricks-actions'
import Trick from './TricksInfo'

const Tricks = () => {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchTricks())
    }, [])

    return (
        <Fragment>
        <p>List of tricks</p>
        <Trick />
        </Fragment>
    )
}

export default Tricks