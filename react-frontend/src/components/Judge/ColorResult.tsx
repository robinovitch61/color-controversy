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
  percent: number;
  count: number;
}

function ColorResult(props: ColorResultProps) {
  const { color, percent, count } = props;

  const percTooSmall = () => percent < MIN_PERCENT_TO_SHOW_TEXT;

  const opacity = percTooSmall() ? 0 : 100;

  return (
    <StyledColorResultDiv width={percent}>
      <StyledColorTextBarP opacity={opacity}>{percent}%</StyledColorTextBarP>
      <StyledColorBarDiv color={color}>
        <p
          style={{
            opacity: opacity,
            margin: 0,
            padding: 0,
          }}
        >
          {color}
        </p>
      </StyledColorBarDiv>
      <StyledColorTextBarP opacity={opacity}>{count}</StyledColorTextBarP>
    </StyledColorResultDiv>
  );
}

export default ColorResult;
