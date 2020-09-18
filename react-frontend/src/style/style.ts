import styled from 'styled-components'

const COLOR_CONVERSIONS = {
  red: '#FF0000',
  orange: '#FF7A00',
  yellow: '#FFFF00',
  green: '#00DE00',
  blue: '#3388FF',
  pink: '#FF00D9',
  purple: '#AE00FF'
}
const CONTAINER_WIDTH_PX = 650
const JUDGE_CONTAINER_WIDTH_PX = 550
const TRANSITION_WIDTH_MOBILE = 750
const RED_COLOR = '#ff007f'
const ORANGE_COLOR = 'rgba(255, 170, 29, 0.9) 80.46%'
const NAV_HEIGHT_PX = 80
const NAV_LOGO_MARGIN_PX = 20
const NAV_LOGO_WIDTH_PX = NAV_HEIGHT_PX - NAV_LOGO_MARGIN_PX
const NAV_HEIGHT_MOBILE_PX = 50
const NAV_LOGO_MARGIN_MOBILE_PX = 10
const NAV_LOGO_WIDTH_MOBILE_PX = NAV_HEIGHT_MOBILE_PX - NAV_LOGO_MARGIN_MOBILE_PX
const FOOTER_HEIGHT_PX = 30
const FOOTER_MARGIN_PX = 20

////////////////////////////
// GENERIC
////////////////////////////

export const StyledContainerDiv = styled.div`
  max-width: ${CONTAINER_WIDTH_PX}px;
  margin: 0 auto;

  @media screen and (max-width: ${TRANSITION_WIDTH_MOBILE}px) {
    width: 90%;
  }
`

export const StyledJudgeContainerDiv = styled(StyledContainerDiv)`
  z-index: 1;
  max-width: ${JUDGE_CONTAINER_WIDTH_PX}px;
`

export const StyledCenteredP = styled.p`
  width: 100%;
  textalign: center;
`

export const StyledFlexDiv = styled.div`
  width: 100%;
  display: flex;
`

////////////////////////////
// JUDGE
////////////////////////////

export const StyledColorSquareAndResultsDiv = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 95%;
  margin: 0 auto;
`

interface StyledColorSquareToJudgeDivProps {
  inputColor: string
}
export const StyledColorSquareToJudgeDiv = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: ${(p: StyledColorSquareToJudgeDivProps) => p.inputColor};
`

export const StyledJudgeButtonContainerDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1em 0;

  p {
    margin: 1em;
    padding: 0;
  }

  @media screen and (max-width: ${TRANSITION_WIDTH_MOBILE}px) {
    font-size: 0.9em;

    p {
      margin: 0.5em;
    }
  }
`

export const StyledJudgeButton = styled.button`
  color: white;
  background-color: #2d2a2a;
  font-size: 1.2rem;
  height: 55px;
  width: 200px;
  border: unset;
  margin: 0 1em;

  &:hover {
    cursor: pointer;
  }

  @media screen and (min-width: ${TRANSITION_WIDTH_MOBILE}px) {
    &:focus,
    &:active,
    &:hover {
      outline: 2px solid #2d2a2a;
      background-color: #f5f5f5;
      color: #2d2a2a;
    }
  }

  @media screen and (max-width: ${TRANSITION_WIDTH_MOBILE}px) {
    padding: 0.7em 0;
    margin: 0;
    width: 45%;

    &:focus,
    &:active,
    &:hover,
    &:visited {
      outline: none;
      opacity: 1;
    }
  }
`

export const StyledColorResultsDiv = styled.div`
  position: absolute;
  height: 100%;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  text-align: center;
`

interface StyledColorResultDivProps {
  width: number
}
export const StyledColorResultDiv = styled.div`
  width: ${(p: StyledColorResultDivProps) => p.width}%;
  display: flex;
  align-items: center;
  flex-direction: column;
`

interface StyledColorBarTextPProps {
  opacity: number
  marginEm: number
  after?: string
}
export const StyledColorTextBarP = styled.p`
  opacity: ${(p: StyledColorBarTextPProps) => p.opacity};
  margin: ${(p: StyledColorBarTextPProps) => p.marginEm}em;
  padding: 0;
  &::after { 
    content: '${(p: StyledColorBarTextPProps) => p.after || ''}';
  }
`

interface StyledColorBarDivProps {
  color: string
}
export const StyledColorBarDiv = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0.5em 0;
  border: 0.5px solid black;
  background-color: ${(p: StyledColorBarDivProps) => {
    // @ts-ignore TODO: export color options as ColorOption enum from backend.
    // this wasn't explicitly supported by typecript gen, but could
    // probably figure it out later
    return COLOR_CONVERSIONS[p.color]
  }};
  text-align: center;
`

export const StyledNextButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1em;
`

////////////////////////////
// NAV AND TITLES
////////////////////////////

export const StyledTitleDiv = styled.div`
  width: 100%;
  text-align: center;

  @media screen and (max-width: ${TRANSITION_WIDTH_MOBILE}px) {
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
  position: sticky;
  top: 0;
  z-index: 10;
  width: 100%;
  height: ${NAV_HEIGHT_PX}px;
  display: flex;
  justify-content: space-between;
  background: linear-gradient(
    270deg,
    ${RED_COLOR},
    ${ORANGE_COLOR},
    rgba(255, 240, 0, 0.5) 98.59%
  );

  @media screen and (max-width: ${TRANSITION_WIDTH_MOBILE}px) {
    height: ${NAV_HEIGHT_MOBILE_PX}px;
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
        width: ${NAV_LOGO_WIDTH_PX}px;
        max-width: 100px;
        opacity: 0.7;
        padding-left: ${NAV_LOGO_MARGIN_PX / 2}px;

        @media screen and (max-width: ${TRANSITION_WIDTH_MOBILE}px) {
          width: ${NAV_LOGO_WIDTH_MOBILE_PX}px;
          padding-left: ${NAV_LOGO_MARGIN_MOBILE_PX / 2}px;
        }
      }
    }
  }

  .nav-hamburger,
  .nav-exit {
    height: 100%;
    display: none;

    @media screen and (max-width: ${TRANSITION_WIDTH_MOBILE}px) {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-left: 5vw;
      padding-right: 5vw;
    }
  }

  .nav-exit {
    z-index: 10;
  }

  .nav-links {
    height: 100%;
    margin-right: 2vw;
    font-size: 1.1rem;

    @media screen and (max-width: ${TRANSITION_WIDTH_MOBILE}px) {
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
    width: 100%;
    height: 100vh;
    background-color: #ffe4bb;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    display: none;
    font-size: 1.1rem;
    z-index: 5;

    a {
      width: 90%;
      padding: 1.5rem 0;
      margin: 0.3rem 0;
      background-color: #ffd08a;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    @media screen and (max-width: ${TRANSITION_WIDTH_MOBILE}px) {
      display: flex;
    }
  }
`

////////////////////////////
// ALL COLORS
////////////////////////////

interface StyledColorDivProps {
  marginPerc: number
  nColorsPerRow: number
  color: string
}
// Assuming 4 color squares per row
// and 1% margin between squares
// width = 100 / 4 - (1 * 2) %
export const StyledColorDiv = styled.div`
  background-color: ${(p: StyledColorDivProps) => p.color};
  margin: ${(p: StyledColorDivProps) => p.marginPerc}%;
  width: ${(p: StyledColorDivProps) =>
    100 / p.nColorsPerRow - p.marginPerc * 2}%;

  &:after {
    content: '';
    display: block;
    padding-top: 100%;
    float: left;
  }

  a {
    display: block;
    width: 100%;
    height: 100%;
  }
`

interface StyledColorGridDiv {
  nColorsPerRow: number
  totalColors: number
}
export const StyledColorGridDiv = styled.div`
  display: flex;
  flex-wrap: wrap;

  div:nth-last-child(-n
      + ${(p: StyledColorGridDiv) => {
        const numInLastRow = p.totalColors % p.nColorsPerRow
        return numInLastRow === 0 ? p.nColorsPerRow : numInLastRow
      }}) {
    // stuff here only applies to last row
    // didn't end up needing this
  }
`

////////////////////////////
// RANKINGS
////////////////////////////

export const StyledRankingContainerDiv = styled(StyledContainerDiv)`
  .ranked-color:nth-child(odd) {
    border-bottom: 1px solid lightblue;
  }
  .ranked-color:nth-child(even) {
    border-bottom: 1px solid lightgray;
  }

  @media screen and (max-width: ${TRANSITION_WIDTH_MOBILE}px) {
    font-size: 0.7em;
  }
`

export const StyledRankedColorDiv = styled.div`
  display: flex;
  align-items: center;

  @media screen and (min-width: ${TRANSITION_WIDTH_MOBILE}px) {
    &:hover {
      .hex-text {
        opacity: 1;
      }
    }
  }
`

interface StyledRankedColorBoxDivProps {
  hexColor: string
}
export const StyledRankedColorBoxDiv = styled.div`
  background-color: ${(p: StyledRankedColorBoxDivProps) => p.hexColor};
  padding: 1.5em 1.2em;
  margin: 1em;

  p.hex-text {
    opacity: 0;
  }

  @media screen and (max-width: ${TRANSITION_WIDTH_MOBILE}px) {
    padding: 0.7em 0.4em;

    p.hex-text {
      opacity: 0;
    }
  }
`

////////////////////////////
// FOOTER
////////////////////////////
export const StyledPageContent = styled.div`
  margin-bottom: ${FOOTER_HEIGHT_PX + FOOTER_MARGIN_PX}px;
`

export const StyledFooter = styled.footer`
  background: linear-gradient(
    90deg,
    ${RED_COLOR},
    ${ORANGE_COLOR},
    rgba(255, 240, 0, 0) 98.59%
  );
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  height: ${FOOTER_HEIGHT_PX}px;

  @media screen and (max-width: ${TRANSITION_WIDTH_MOBILE}px) {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
`
