import React from 'react'
import { AppState } from '../store/types'
import { useSelector, useDispatch } from 'react-redux'
import { getColor } from '../colors'
import { updateColor } from '../store/actions'
import { ccapi } from '../ccapi'

function Judge () {
  const color = useSelector((state: AppState) => state.color)
  const dispatch = useDispatch()
  const newColor = getColor()
  dispatch(updateColor(newColor))

  return (
    <div className={'container judge'}>
      <div
        className={'judge-color'}
        style={{ backgroundColor: `${color}` }}
      ></div>
    </div>
  )
}

export default Judge
