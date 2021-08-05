import React from 'react'
import { useSelector } from 'react-redux'

const TrickDetails = (props) => {   
    const trick = useSelector((state) => state.seededTricks.trick)
    let name = null
    let difficulty = null
    let type_of_trick = null
    let user_total = null
    if (trick.data != undefined)
    {
        //console.log(trick.data)
        name = trick.data.attributes.name
        difficulty = trick.data.attributes.difficulty
        type_of_trick = trick.data.attributes.type_of_trick
        user_total = trick.data.relationships.users.data.length
    }
 
    return (
    <div className="trick-card" key={1}>
        <div className="trick-name">Name: {name}</div>
        <div className="trick-difficulty">Difficulty: {difficulty}</div>
        <div className="trick-type">Type: {type_of_trick}</div>
        <div className="trick-type">Total users who logged this trick: {user_total}</div>
        <button onClick={props.handleButton}>Add Trick to Log </button>
    </div>        
    )
    
}

export default TrickDetails