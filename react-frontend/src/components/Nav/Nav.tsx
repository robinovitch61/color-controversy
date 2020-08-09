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

  const hideNav = () => {
    if (navOpen) {
      dispatch(toggleNav())
    }
  }

  const showNav = () => {
    if (!navOpen) {
      dispatch(toggleNav())
    }
  }

  return (
    <nav>
      {/* logo */}
      <div className={'nav-logo-container'}>
        <Link to='/' onClick={() => hideNav()}>
          <span>
            <img className={'nav-logo'} src={logo}></img>
          </span>
        </Link>
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
        onClick={() => showNav()}
        style={{ display: navOpen ? 'none' : '' }}
      >
        <img src={hamburger}></img>
      </button>

      <button
        className={'nav-exit'}
        onClick={() => hideNav()}
        style={{ display: navOpen ? '' : 'none' }}
      >
        <img src={exit}></img>
      </button>

      <div
        className={'nav-links-mobile'}
        style={{ display: navOpen ? '' : 'none' }}
      >
        <Link to='/' onClick={() => hideNav()}>
          <span>Judge</span>
        </Link>
        <Link to='/colors' onClick={() => hideNav()}>
          <span>All Colors</span>
        </Link>
        <Link to='/leaderboard' onClick={() => hideNav()}>
          <span>Leaderboard</span>
        </Link>
        <Link to='/what' onClick={() => hideNav()}>
          <span>What Is This?</span>
        </Link>
      </div>
    </nav>
  )
}
