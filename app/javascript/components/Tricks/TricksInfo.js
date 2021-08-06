import React from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import styled from 'styled-components'

const Div = styled.div`
background: #2b91af;
padding: 7px;
`

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
            <Div className="trick-card" key={id}>
                <div className="trick-name">Name: {name}</div>
                <div className="trick-difficulty">Difficulty: {difficulty}</div>
                <div className="trick-type">Type: {type_of_trick}</div>
                <div className="trick-link" key={id}><Link to={`/tricks/${id}`}>View Trick </Link></div>
            </Div> 
        )
    })
    }
    return <>{ renderList }</>
}

export default Trick
