import api from '../Api_URLs/api'
import * as actionTypes from './addtricks-types'

export const fetchTricks = () => async (dispatch) => {
    const response = await api.get("/tricks")
    dispatch({type: actionTypes.FETCH_TRICKS, payload: response.data})
}

export const fetchTrick = (id) => async (dispatch) => {
    const response = await api.get(`/tricks/${id}`)
    dispatch({type: actionTypes.FETCH_TRICK, payload: response.data})
}