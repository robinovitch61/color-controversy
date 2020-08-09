import React from 'react'
import { AppState } from '../../store/types'
import { useSelector, useDispatch } from 'react-redux'
import { toggleNav } from '../../store/actions'
import logo from './logo.svg'
import hamburger from './hamburger.svg'
import exit from './exit.svg'

export default function Nav () {
  const navOpen = useSelector((state: AppState) => state.navOpen)
  const dispatch = useDispatch()

  return (
    <nav>
      {/* logo */}
      <img className={'nav-logo'} src={logo}></img>

      {/* desktop */}
      <div className={'nav-links'}>
        <a href='/test0'>Judge</a>
        <a href='/test1'>All Colors</a>
        <a href='/test2'>Leaderboard</a>
        <a href='/test3'>What Is This</a>
      </div>

      {/* mobile */}
      <div
        className={'nav-hamburger'}
        style={{ display: navOpen ? 'none' : '' }}
      >
        <button onClick={() => dispatch(toggleNav())}>
          <img src={hamburger}></img>
        </button>
      </div>

      <div className={'nav-exit'} style={{ display: navOpen ? '' : 'none' }}>
        <button onClick={() => dispatch(toggleNav())}>
          <img src={exit}></img>
        </button>
      </div>
    </nav>
  )
}
