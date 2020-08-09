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
      <a href='/'>
        <img className={'nav-logo'} src={logo}></img>
      </a>

      {/* desktop */}
      <div className={'nav-links'}>
        <a href='/test0'>Judge</a>
        <a href='/test1'>All Colors</a>
        <a href='/test2'>Leaderboard</a>
        <a href='/test3'>What Is This</a>
      </div>

      {/* mobile */}
      <button
        className={'nav-hamburger'}
        onClick={() => dispatch(toggleNav())}
        style={{ display: navOpen ? 'none' : '' }}
      >
        <img src={hamburger}></img>
      </button>

      <button
        className={'nav-exit'}
        onClick={() => dispatch(toggleNav())}
        style={{ display: navOpen ? '' : 'none' }}
      >
        <img src={exit}></img>
      </button>

      <div
        className={'nav-links-mobile'}
        style={{ display: navOpen ? '' : 'none' }}
      ></div>
    </nav>
  )
}
