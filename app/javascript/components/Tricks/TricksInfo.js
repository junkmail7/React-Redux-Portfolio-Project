import React from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter as Router, Link } from 'react-router-dom'

const Trick = () => {
    const tricks = useSelector((state) => state.seededTricks.tricks.data)
    let renderList = null
    //console.log(tricks)
    if (tricks != undefined)
    {
        renderList = tricks.map((t) => {
        const { name, difficulty, type_of_trick} = t.attributes
        const { id } = t
        return(
            <div className="trick-card" key={id}>
                <div className="trick-name">Name: {name}</div>
                <div className="trick-difficulty">Difficulty: {difficulty}</div>
                <div className="trick-type">Type: {type_of_trick}</div>
                <div className="trick-link" key={id}><Link to={`/tricks/${id}`}>View Trick {id} </Link></div>
            </div>
        )
    })
    }
    return <>{ renderList }</>
}

export default Trick
