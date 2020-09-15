import {
  DEFAULT_STATE,
  UPDATE_JUDGE_COUNT,
  UPDATE_CONTROVERSIAL_COUNT,
  TOGGLE_NAV,
  AppState,
  AppAction
} from './types'

const reducer = (
  state: AppState = DEFAULT_STATE,
  action: AppAction
): AppState => {
  switch (action.type) {
    case UPDATE_JUDGE_COUNT:
      return {
        ...state,
        judgeCount: state.judgeCount + action.payload
      }
    case UPDATE_CONTROVERSIAL_COUNT:
      return {
        ...state,
        controversialCount: state.controversialCount + action.payload
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
