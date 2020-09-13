import React from 'react';
import { StyledColorResultDiv, StyledColorBarP } from '../../style/style';

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

  const hideIfUnderThreshold = (text: string) => {
    return percTooSmall() ? '' : text;
  };

  const opacity = percTooSmall() ? 0 : 100;

  return (
    <StyledColorResultDiv width={percent}>
      <p
        style={{
          opacity: opacity,
        }}
      >
        {percent}%
      </p>
      <StyledColorBarP color={color}>
        <p
          style={{
            opacity: opacity,
            margin: 0,
            padding: 0
          }}
        >
          {color}
        </p>
      </StyledColorBarP>
      <p
        style={{
          opacity: opacity,
        }}
      >
        {count}
      </p>
    </StyledColorResultDiv>
  );
}

export default ColorResult;
