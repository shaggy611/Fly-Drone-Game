// import axios from 'axios'
import { UserAction, UserActionTypes } from '../../types'
import { Dispatch } from 'redux'
import { apiCallGithub } from '../../utils/apiGetCoords'

export const fetchGithubUsers = (userNameInput: string) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionTypes.FETCH_USERS })

      const response = await apiCallGithub(userNameInput)

      dispatch({
        type: UserActionTypes.FETCH_USERS_SUCCESS,
        payload: response.data,
      })
    } catch (e) {
      dispatch({
        type: UserActionTypes.FETCH_USERS_ERROR,
        payload: 'Incorrect username or problems with data fetching!',
      })
    }
  }
}
