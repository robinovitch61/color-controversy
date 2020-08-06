import {
  DEFAULT_STATE,
  UPDATE_COLOR,
  TOGGLE_NAV,
  AppState,
  AppAction
} from './types'

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
    case TOGGLE_NAV:
      return {
        ...state,
        navOpen: !state.navOpen
      }
    default:
      return state
  }
}

export default reducer
