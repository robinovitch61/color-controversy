import React from 'react';
import Color from './Color';
import { StyledContainerDiv, StyledColorGridDiv } from '../../style/style';

interface ColorGridProps {
  colors: string[];
}

function ColorGrid(props: ColorGridProps) {
  return (
    <StyledContainerDiv>
      <StyledColorGridDiv>
        {props.colors.map((color) => (
          <Color colorHex={color} />
        ))}
      </StyledColorGridDiv>
    </StyledContainerDiv>
  );
}

export default ColorGrid;
