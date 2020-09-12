import React from 'react';
import { StyledColorDiv } from '../../style/style';

interface ColorProps {
  colorHex: string;
}

function Color(props: ColorProps) {
  return <StyledColorDiv color={props.colorHex} />;
}

export default Color;
