import * as actionTypes from './adduser-types'

const INITIAL_STATE = {
    user: null,
}

const userReducer = (state = INITIAL_STATE, {type, payload}) => {
    switch(type) {
        case actionTypes.FETCH_USER:
            return {...state, user: payload}  
        default:
            return state; 
    }
}

export default userReducer;