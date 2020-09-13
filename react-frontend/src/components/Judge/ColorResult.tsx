import React from 'react';
import { StyledColorResultDiv, StyledColorBarP } from '../../style/style';

const MIN_PERCENT_TO_SHOW = 10;

interface ColorResultProps {
  color: string;
  percent: number;
  count: number;
}

const hideIfUnderThreshold = (val: number, text: string) => {
  return val > MIN_PERCENT_TO_SHOW ? text : '';
};

function ColorResult(props: ColorResultProps) {
  const { color, percent, count } = props;

  return (
    <StyledColorResultDiv width={percent}>
      <p>{hideIfUnderThreshold(percent, `${percent.toString()}%`)}</p>
      <StyledColorBarP color={color}>
        {hideIfUnderThreshold(percent, color)}
      </StyledColorBarP>
      <p>{hideIfUnderThreshold(count, count.toString())}</p>
    </StyledColorResultDiv>
  );
}

export default ColorResult;
