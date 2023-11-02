const initialState: CaveState = {
  coords: {}
}

export const caveReducer = (
  state = initialState,
  action: UserAction
): UsersState => {
  switch (action.type) {
    case UserActionTypes.FETCH_USERS:
      return { loading: true, error: null, user: {} }

    case UserActionTypes.FETCH_USERS_SUCCESS:
      return {
        loading: false,
        error: null,
        user: { ...action.payload },
      }

    case UserActionTypes.FETCH_USERS_ERROR:
      return { loading: false, error: action.payload, user: {} }

    default:
      return state
  }
}
