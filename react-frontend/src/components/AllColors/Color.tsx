import React from 'react';
import { StyledColorDiv } from '../../style/style';

interface ColorProps {
  hexColor: string;
  nColorsPerRow: number;
  marginPerc: number;
  navigateToJudge: (hex: string) => void;
}

function Color(props: ColorProps) {
  return (
    <StyledColorDiv
      color={props.hexColor}
      marginPerc={props.marginPerc}
      nColorsPerRow={props.nColorsPerRow}
      onClick={() => props.navigateToJudge(props.hexColor)}
      style={{ cursor: 'pointer' }}
    />
  );
}

export default Color;
