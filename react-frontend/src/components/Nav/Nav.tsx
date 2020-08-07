import React from 'react'
import { AppState } from '../../store/types'
import { useSelector, useDispatch } from 'react-redux'
import { toggleNav } from '../../store/actions'
import logo from './logo.svg'
import hamburger from './hamburger.svg'

export default function Nav () {
  const navOpen = useSelector((state: AppState) => state.navOpen)
  const dispatch = useDispatch()

  return (
    <nav>
      <img className={'nav-logo'} src={logo}></img>
      <div>
        {/* if mobile */}
        <button onClick={() => dispatch(toggleNav())}>
          <img className={'nav-hamburger'} src={hamburger}></img>
        </button>
        {/* else */}
      </div>
    </nav>
  )
}
