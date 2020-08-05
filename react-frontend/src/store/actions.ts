import { HexColor, AppState, UPDATE_COLOR, UpdateColorAction } from './types'

export const updateColor = (color: HexColor): UpdateColorAction => {
  return {
    type: UPDATE_COLOR,
    payload: color
  }
}
