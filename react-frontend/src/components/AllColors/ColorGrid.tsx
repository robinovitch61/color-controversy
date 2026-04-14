import React from 'react';
import Color from './Color';
import { StyledContainerDiv, StyledColorGridDiv } from '../../style/style';

const NUM_COLORS_PER_ROW = 4;
const MARGIN_BETWEEN_COLORS_PERC = 1.5;

interface ColorGridProps {
  colors: string[];
  navigateToJudge: (hex: string) => void;
}

function ColorGrid(props: ColorGridProps) {
  return (
    <StyledContainerDiv>
      <StyledColorGridDiv
        nColorsPerRow={NUM_COLORS_PER_ROW}
        totalColors={props.colors.length}
      >
        {props.colors.map((color) => (
          <Color
            key={color}
            hexColor={color}
            nColorsPerRow={NUM_COLORS_PER_ROW}
            marginPerc={MARGIN_BETWEEN_COLORS_PERC}
            navigateToJudge={props.navigateToJudge}
          />
        ))}
      </StyledColorGridDiv>
    </StyledContainerDiv>
  );
}

export default ColorGrid;