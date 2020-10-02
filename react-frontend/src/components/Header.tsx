import React from 'react';
import { StyledTitleDiv } from '../style/style';

const TITLE_OPTIONS = ['Color', 'Colour'];

const colorOrColour = () => {
  return TITLE_OPTIONS[Math.floor(Math.random() * TITLE_OPTIONS.length)];
};

function Header() {
  return (
    <StyledTitleDiv>
      <h1>{`${colorOrColour()} Controversy`}</h1>
    </StyledTitleDiv>
  );
}

export default Header;
