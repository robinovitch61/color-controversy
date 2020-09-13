import React from 'react';
import { ModelsColor } from 'colorapi/dist/ccapi';
import ColorResults from '../Judge/ColorResults';
import { StyledRankedColorDiv, StyledRankedColorBoxP } from '../../style/style';

interface RankedColorProps {
  rank: number;
  color: ModelsColor;
}

function RankedColor(props: RankedColorProps) {
  return (
    <StyledRankedColorDiv>
      <p>#{props.rank < 10 ? '0' + props.rank : props.rank}</p>
      <StyledRankedColorBoxP hexColor={props.color.hex}>
        {props.color.hex}
      </StyledRankedColorBoxP>
      <ColorResults color={props.color} />
    </StyledRankedColorDiv>
  );
}

export default RankedColor;
