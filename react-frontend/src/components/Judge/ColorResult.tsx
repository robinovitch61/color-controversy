import React from 'react';
import {
  StyledColorResultDiv,
  StyledColorBarP,
} from '../../style/style';

interface ColorResultProps {
  color: string
  percent: number
  count: number
}

function ColorResult(props: ColorResultProps) {
    return (
      <StyledColorResultDiv width={props.percent}>
        <p>{props.percent}</p>
        <StyledColorBarP color={props.color}>{props.color}</StyledColorBarP>
        <p>{props.count}</p>
      </StyledColorResultDiv>
    );
}

export default ColorResult;
