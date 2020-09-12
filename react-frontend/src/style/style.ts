import styled from 'styled-components'

const transitionWidthMobile = 768
const red = '#ff007f'
const orange = 'rgba(255, 170, 29, 0.739583) 80.46%'
const navHeight = 100
const navLogoWidth = navHeight - 20
const navHeightMobile = 60
const navLogoWidthMobile = navHeightMobile - 10

////////////////////////////
// GENERIC
////////////////////////////

export const StyledContainerDiv = styled.div`
  max-width: 550px;
  margin: 0 auto;

  @media screen and (max-width: ${transitionWidthMobile}px) {
    width: 65%;
  }
`

////////////////////////////
// JUDGE
////////////////////////////

export const StyledJudgeColorP = styled.div`
  margin: 0 auto;
  width: 100%;
  text-align: center;

  &:before {
    content: '';
    display: block;
    padding-bottom: 41%;
  }

  &:after {
    content: '';
    display: block;
    padding-bottom: 41%;
  }

  @media screen and (max-width: ${transitionWidthMobile}px) {
    &:before {
      content: '';
      display: block;
      padding-bottom: 35%;
    }
  
    &:after {
      content: '';
      display: block;
      padding-bottom: 35%;
    }
  }
`

export const StyledJudgementDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    margin: 1em;
    padding: 0;
  }

  @media screen and (max-width: ${transitionWidthMobile}px) {
    font-size: 0.9em;

    p {
      margin: 0.5em;
    }
  }
`

export const StyledJudgeButtonContainer = styled.div`
  display: flex;
  margin: 0em auto;
  margin-bottom: 1em;
  width: 90%;
  justify-content: space-between;
  align-items: center;
`

export const StyledJudgeButton = styled.button`
  color: white;
  background-color: #2d2a2a;
  font-size: 1.2rem;
  padding: 1em 0;
  width: 45%;
  border: unset;

  @media screen and (max-width: ${transitionWidthMobile}px) {
    padding: 0.7em 0;

    &:focus,
    &:active,
    &:hover,
    &:visited {
      outline: none;
      opacity: 1;
    }
  }
`

////////////////////////////
// NAV AND TITLES
////////////////////////////

export const StyledTitleDiv = styled.div`
  width: 100%;
  text-align: center;

  @media screen and (max-width: ${transitionWidthMobile}px) {
    h1 {
      margin: 0.5rem 0;
    }
    h2 {
      margin-top: 0.2rem;
    }
  }
`

export const StyledNavButton = styled.button`
  background-color: unset;
  border: unset;
  padding: 0;

  &:focus,
  &:active,
  &:hover,
  &:visited {
    outline: none;
    opacity: 1;
  }
`

export const StyledNav = styled.nav`
  width: 100%;
  height: ${navHeight}px;
  display: flex;
  justify-content: space-between;
  background: linear-gradient(
    270deg,
    ${red},
    ${orange},
    rgba(255, 240, 0, 0) 98.59%
  );

  @media screen and (max-width: ${transitionWidthMobile}px) {
    height: ${navHeightMobile}px;
  }

  button {
    opacity: 0.6;
  }

  .nav-logo,
  .nav-hamburger,
  .nav-exit {
    touch-action: manipulation;
  }

  .nav-logo-container {
    height: 100%;

    span {
      height: 100%;
      display: flex;
      align-items: center;

      .nav-logo {
        width: ${navLogoWidth}px;
        max-width: 100px;
        opacity: 0.7;
        padding-left: 2vw;

        @media screen and (max-width: ${transitionWidthMobile}px) {
          width: ${navLogoWidthMobile}px;
          padding-left: 3vw;
        }
      }
    }
  }

  .nav-hamburger,
  .nav-exit {
    height: 100%;
    display: none;

    @media screen and (max-width: ${transitionWidthMobile}px) {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-left: 5vw;
      padding-right: 5vw;
    }
  }

  .nav-exit {
    z-index: 1;
  }

  .nav-links {
    height: 100%;
    margin-right: 2vw;
    font-size: 1.1rem;

    @media screen and (max-width: ${transitionWidthMobile}px) {
      display: none;
    }

    a {
      width: 160px;
      margin: 0;
      height: 100%;
      display: inline-block;
      text-align: center;

      // allows vertical middle  alignment
      &:before {
        content: '';
        display: inline-block;
        vertical-align: middle;
        height: 100%;
      }

      &:hover {
        background-color: orange;
      }
    }
  }

  .nav-links-mobile {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 40%;
    background-color: #ffe4bb;
    flex-direction: column;
    align-items: center;
    display: none;
    font-size: 1.1rem;

    a {
      width: 100%;
      padding: 1.5rem 0;
      margin: 0.3rem 0;
      background-color: #ffd08a;

      &:first-child {
        margin-top: ${navHeightMobile}px;
      }

      span {
        display: inline-block;
        margin-left: 1.5rem;
      }
    }

    @media screen and (max-width: ${transitionWidthMobile}px) {
      display: flex;
    }
  }
`