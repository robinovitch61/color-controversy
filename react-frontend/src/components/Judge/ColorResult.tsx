import React from 'react';
import {
  StyledColorResultDiv,
  StyledColorBarDiv,
  StyledColorTextBarP,
} from '../../style/style';

// text gets mushed/hidden when colorbar is small
const MIN_PERCENT_TO_SHOW_TEXT = 10;

interface ColorResultProps {
  color: string;
  percentFloat: number;
  textBelow: string;
}

function ColorResult(props: ColorResultProps) {
  const { color, percentFloat, textBelow } = props;
  const percent = Math.round(percentFloat);
  const percTooSmall = () => percent < MIN_PERCENT_TO_SHOW_TEXT;
  const opacity = percTooSmall() ? 0 : 100;

  return (
    <StyledColorResultDiv width={percentFloat}> 
      <StyledColorTextBarP opacity={percent === 0 ? 0 : 100} marginEm={0.3} after={'%'}>{percent}</StyledColorTextBarP>
      <StyledColorBarDiv opacity={percent === 0 ? 0 : 100} color={color}>
        <StyledColorTextBarP opacity={opacity} marginEm={0}>
          {color}
        </StyledColorTextBarP>
      </StyledColorBarDiv>
      <StyledColorTextBarP opacity={percent === 0 ? 0 : 100} marginEm={0.3}>{textBelow}</StyledColorTextBarP>
    </StyledColorResultDiv>
  );
}

export default ColorResult;
