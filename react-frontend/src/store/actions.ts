import {
  TOGGLE_NAV,
  UPDATE_JUDGE_COUNT,
  UpdateJudgeCountAction,
  UPDATE_CONTROVERSIAL_COUNT,
  ToggleNavAction,
  UpdateControversialCountAction
} from './types'

export const updateJudgeCount = (increment: number): UpdateJudgeCountAction => {
  return {
    type: UPDATE_JUDGE_COUNT,
    payload: increment
  }
}

export const updateControversialCount = (
  increment: number
): UpdateControversialCountAction => {
  return {
    type: UPDATE_CONTROVERSIAL_COUNT,
    payload: increment
  }
}

export const toggleNav = (): ToggleNavAction => {
  return {
    type: TOGGLE_NAV
  }
}
