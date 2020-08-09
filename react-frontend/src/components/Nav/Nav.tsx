import React from 'react'
import { AppState } from '../../store/types'
import { useSelector, useDispatch } from 'react-redux'
import { toggleNav } from '../../store/actions'
import logo from './logo.svg'
import hamburger from './hamburger.svg'
import exit from './exit.svg'
import { Link } from 'react-router-dom'

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
        <Link to='/'>
          <span>Judge</span>
        </Link>
        <Link to='/colors'>
          <span>All Colors</span>
        </Link>
        <Link to='/leaderboard'>
          <span>Leaderboard</span>
        </Link>
        <Link to='/what'>
          <span>What Is This?</span>
        </Link>
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
        <Link to='/' onClick={() => dispatch(toggleNav())}>
          <span>Judge</span>
        </Link>
        <Link to='/colors' onClick={() => dispatch(toggleNav())}>
          <span>All Colors</span>
        </Link>
        <Link to='/leaderboard' onClick={() => dispatch(toggleNav())}>
          <span>Leaderboard</span>
        </Link>
        <Link to='/what' onClick={() => dispatch(toggleNav())}>
          <span>What Is This?</span>
        </Link>
      </div>
    </nav>
  )
}
