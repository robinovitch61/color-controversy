export const UPDATE_JUDGE_COUNT = 'UPDATE_JUDGE_COUNT'
export const UPDATE_CONTROVERSIAL_COUNT = 'UPDATE_CONTROVERSIAL_COUNT'
export const TOGGLE_NAV = 'TOGGLE_NAV'

export interface UpdateJudgeCountAction {
  type: typeof UPDATE_JUDGE_COUNT
  payload: number
}

export interface UpdateControversialCountAction {
  type: typeof UPDATE_CONTROVERSIAL_COUNT
  payload: number
}

export interface ToggleNavAction {
  type: typeof TOGGLE_NAV
}

export type AppState = {
  judgeCount: number
  controversialCount: number
  navOpen: Boolean
}

export type AppAction =
  | UpdateControversialCountAction
  | UpdateJudgeCountAction
  | ToggleNavAction

export const DEFAULT_STATE = {
  judgeCount: 0,
  controversialCount: 0,
  navOpen: false
}
