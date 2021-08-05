import api from '../Api_URLs/api'
import * as actionTypes from './adduser-types'

export const fetchUser = ( name ) => async (dispatch) => {
    const response = await api.post(`/users/`, {name})
    dispatch({type: actionTypes.FETCH_USER, payload: response.data})
}
