export type HexColor = String

export const UPDATE_COLOR = 'UPDATE_COLOR'
export const TOGGLE_NAV = 'TOGGLE_NAV'

export interface UpdateColorAction {
  type: typeof UPDATE_COLOR
  payload: HexColor
}

export interface ToggleNavAction {
  type: typeof TOGGLE_NAV
}

export type AppAction = UpdateColorAction | ToggleNavAction

export type AppState = {
  color: HexColor | undefined
  navOpen: Boolean
}

export const DEFAULT_STATE = {
  color: undefined,
  navOpen: false
}
