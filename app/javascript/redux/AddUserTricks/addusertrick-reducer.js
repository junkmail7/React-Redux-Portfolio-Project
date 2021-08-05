import * as actionTypes from './addusertrick-types'

const INITIAL_STATE = {
    usertrick: null,
    usertricks: []
}

const userTrickReducer = (state = INITIAL_STATE, {type, payload}) => {
    switch(type) {
        case actionTypes.FETCH_USER_TRICK:
            return {...state, usertrick: payload}
        case actionTypes.FETCH_USER_TRICKS:
            return {...state, usertricks: payload}
        case actionTypes.UPDATE_USER_TRICK:
            return {...state, usertrick: payload}
        default:
            return state; 
    }
}

export default userTrickReducer;