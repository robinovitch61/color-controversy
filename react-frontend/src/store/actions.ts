import {
  HexColor,
  UPDATE_COLOR,
  UpdateColorAction,
  TOGGLE_NAV,
  ToggleNavAction
} from './types'

export const updateColor = (color: HexColor): UpdateColorAction => {
  return {
    type: UPDATE_COLOR,
    payload: color
  }
}

export const toggleNav = (): ToggleNavAction => {
  return {
    type: TOGGLE_NAV
  }
}
