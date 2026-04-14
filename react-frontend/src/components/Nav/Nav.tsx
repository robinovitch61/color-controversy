import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../store/types';
import { toggleNav } from '../../store/actions';
import { StyledNav, StyledNavButton } from '../../style/style';
import { Page } from '../../App';

const logo = `${process.env.PUBLIC_URL}/logo.svg`;
const hamburger = `${process.env.PUBLIC_URL}/hamburger.svg`;
const exit = `${process.env.PUBLIC_URL}/exit.svg`;

interface NavProps {
  setPage: (page: Page) => void;
  currentPage: Page;
  navigateToJudge: () => void;
}

export default function Nav({ setPage, currentPage, navigateToJudge }: NavProps) {
  const navOpen = useSelector((state: AppState) => state.navOpen);
  const dispatch = useDispatch();

  const hideNav = () => {
    if (navOpen) {
      dispatch(toggleNav());
    }
  };

  const showNav = () => {
    if (!navOpen) {
      dispatch(toggleNav());
    }
  };

  return (
    <StyledNav>
      {/* logo */}
      <div className={'nav-logo-container'}>
        <span onClick={() => navigateToJudge()} style={{ cursor: 'pointer' }}>
          <span>
            <img className={'nav-logo'} src={logo} alt={'color wheel logo'}></img>
          </span>
        </span>
      </div>

      {/* desktop */}
      <div className={'nav-links'}>
        <span onClick={() => navigateToJudge()}>
          <span>Judge</span>
        </span>
        <span onClick={() => setPage('colors')}>
          <span>All Colors</span>
        </span>
        <span onClick={() => setPage('leaderboard')}>
          <span>Leaderboard</span>
        </span>
        <span onClick={() => setPage('what')}>
          <span>What?</span>
        </span>
      </div>

      {/* mobile */}
      <StyledNavButton
        className={'nav-hamburger'}
        onClick={() => showNav()}
        style={{ display: navOpen ? 'none' : '' }}
      >
        <img src={hamburger} alt={'hamburger dropdown'}></img>
      </StyledNavButton>

      <StyledNavButton
        className={'nav-exit'}
        onClick={() => hideNav()}
        style={{ display: navOpen ? '' : 'none' }}
      >
        <img src={exit} alt={'mobile nav exit'}></img>
      </StyledNavButton>

      <div
        className={'nav-links-mobile'}
        style={{ display: navOpen ? '' : 'none' }}
      >
        <span onClick={() => { navigateToJudge(); hideNav(); }}>
          <span>Judge</span>
        </span>
        <span onClick={() => { setPage('colors'); hideNav(); }}>
          <span>All Colors</span>
        </span>
        <span onClick={() => { setPage('leaderboard'); hideNav(); }}>
          <span>Leaderboard</span>
        </span>
        <span onClick={() => { setPage('what'); hideNav(); }}>
          <span>What?</span>
        </span>
      </div>
    </StyledNav>
  );
}
