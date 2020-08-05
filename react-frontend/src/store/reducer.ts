import { DEFAULT_STATE, UPDATE_COLOR, AppState, AppAction } from './types'

const reducer = (
  state: AppState = DEFAULT_STATE,
  action: AppAction
): AppState => {
  switch (action.type) {
    case UPDATE_COLOR:
      return {
        ...state,
        color: action.payload
      }
    default:
      return state
  }
}

export default reducer
