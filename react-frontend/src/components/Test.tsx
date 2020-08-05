import React from 'react'
import { updateColor } from '../store/actions'
import { AppState } from '../store/types'
import { useSelector, useDispatch } from 'react-redux'

export default function Test () {
  const color = useSelector((state: AppState) => state.color)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Hi! {color}</h1>
      <button onClick={() => dispatch(updateColor('red'))}>Hi!</button>
    </div>
  )
}
