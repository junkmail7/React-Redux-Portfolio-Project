import api from '../Api_URLs/api'
import * as actionTypes from './addusertrick-types'

export const fetchUserTrick = ( userId, id ) => async (dispatch) => {
    const response = await api.post(`/user_tricks/`, {user_id: userId, trick_id: id})
    dispatch({type: actionTypes.FETCH_USER_TRICK, payload: response.data})
}

export const fetchUserTricks = ( ) => async (dispatch) => {
    const response = await api.get(`/user_tricks/`)
    dispatch({type: actionTypes.FETCH_USER_TRICKS, payload: response.data})
}

export const updateUserTrick = ( userId, id, prof, usertrickId ) => async (dispatch) => {
    const response = await api.patch(`/user_tricks/${usertrickId}`, {user_id: userId, trick_id: id, proficiency: prof})
    dispatch({type: actionTypes.UPDATE_USER_TRICK, payload: response.data})
}