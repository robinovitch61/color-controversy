import React from 'react'
import { AppState } from '../store/types'
import { useSelector, useDispatch } from 'react-redux'
import { updateColor } from '../store/actions'
import api from '../connector/connector'

async function getColor (): Promise<string> {
  const result = await api.randomColor({})
  return result.body.hexColor
}

function Judge () {
  const color = useSelector((state: AppState) => state.color)
  const dispatch = useDispatch()
  getColor().then(color => dispatch(updateColor(color)))

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
