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
  count: number;
}

function ColorResult(props: ColorResultProps) {
  const { color, percentFloat, count } = props;
  const percent = parseInt(percentFloat.toString());
  const percTooSmall = () => percent < MIN_PERCENT_TO_SHOW_TEXT;
  const opacity = percTooSmall() ? 0 : 100;

  return (
    <StyledColorResultDiv width={percentFloat}>
      <StyledColorTextBarP opacity={opacity} marginEm={0.3}>{percent}%</StyledColorTextBarP>
      <StyledColorBarDiv color={color}>
        <StyledColorTextBarP opacity={opacity} marginEm={0}>
          {color}
        </StyledColorTextBarP>
      </StyledColorBarDiv>
      <StyledColorTextBarP opacity={opacity} marginEm={0.3}>{count}</StyledColorTextBarP>
    </StyledColorResultDiv>
  );
}

export default ColorResult;