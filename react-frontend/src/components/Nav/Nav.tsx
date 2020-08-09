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
      <div className={'nav-logo-container'}>
        <a href='/'>
          <img className={'nav-logo'} src={logo}></img>
        </a>
      </div>

      {/* desktop */}
      <div className={'nav-links'}>
        <a href='/'>Judge</a>
        <a href='/colors'>All Colors</a>
        <a href='/leaderboard'>Leaderboard</a>
        <a href='/what'>What Is This?</a>
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
      >
        <a href='/'>
          <span>Judge</span>
        </a>
        <a href='/colors'>
          <span>All Colors</span>
        </a>
        <a href='/leaderboard'>
          <span>Leaderboard</span>
        </a>
        <a href='/what'>
          <span>What Is This?</span>
        </a>
      </div>
    </nav>
  )
}
