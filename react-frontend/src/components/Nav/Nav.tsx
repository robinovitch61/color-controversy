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
      <div className={'nav-hamburger'}>
        <button onClick={() => dispatch(toggleNav())}>
          <img src={hamburger}></img>
        </button>
      </div>
      <div className={'nav-links'}>
        <a href='/test0'>Judge</a>
        <a href='/test1'>All Colors</a>
        <a href='/test2'>Leaderboard</a>
        <a href='/test3'>WTF Is This</a>
      </div>
    </nav>
  )
}
