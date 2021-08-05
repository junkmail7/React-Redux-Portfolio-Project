import * as actionTypes from './addtricks-types'

const INITIAL_STATE = {
    tricks: [],
    trick: [],
}

const trickReducer = (state = INITIAL_STATE, {type, payload}) => {
    switch(type) {
        case actionTypes.FETCH_TRICK:
            return {...state, trick: payload}
        case actionTypes.FETCH_TRICKS:
            return {...state, tricks: payload}
        default:
            return state; 
    }
}

export default trickReducer;