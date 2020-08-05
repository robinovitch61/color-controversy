export type HexColor = String

export const UPDATE_COLOR = 'UPDATE_COLOR'

export interface UpdateColorAction {
  type: typeof UPDATE_COLOR
  payload: HexColor
}

export type AppAction = UpdateColorAction

export type AppState = {
  color: HexColor | undefined
}

export const DEFAULT_STATE = {
  color: undefined
}
