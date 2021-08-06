import React, { useState } from 'react'
import styled from 'styled-components'

const Div = styled.div`
background: #2b91af;
padding: 7px;
`

const UserTrick = (props) => {
    return (
        <Div className="trick-card" key={props.name}>
                <div className="trick-name" key={props.usertrickId}>Name: {props.name}</div>
                <div className="trick-difficulty">Difficulty: {props.difficulty}</div>
                <div className="trick-type">Type: {props.type_of_trick}</div>
                <div className="trick-proficiency">Proficiency: {props.prof}</div>
        </Div>
    )
}

export default UserTrick