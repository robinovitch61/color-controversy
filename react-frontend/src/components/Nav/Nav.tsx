import React from 'react'
import { AppState } from '../../store/types'
import { useSelector, useDispatch } from 'react-redux'
import { toggleNav } from '../../store/actions'
import logo from './logo.png'
import hamburger from './hamburger.svg'

export default function Nav () {
  const navOpen = useSelector((state: AppState) => state.navOpen)
  const dispatch = useDispatch()

  return (
    <nav>
      <img src={logo}></img>
      <button onClick={() => dispatch(toggleNav())}>
        <img src={hamburger}></img>
      </button>
    </nav>
  )
}
