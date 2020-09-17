import React from 'react';
import { ModelsColor } from 'colorapi/dist/ccapi';
import ColorResults from '../Judge/ColorResults';
import { StyledRankedColorDiv, StyledRankedColorBoxDiv } from '../../style/style';

interface RankedColorProps {
  rank: number;
  color: ModelsColor;
}

function RankedColor(props: RankedColorProps) {
  return (
    <StyledRankedColorDiv className={'ranked-color'}>
      <p>#{props.rank < 10 ? '0' + props.rank : props.rank}</p>
      <StyledRankedColorBoxDiv hexColor={props.color.hex}>
        <p className='hex-text'>{props.color.hex}</p>
      </StyledRankedColorBoxDiv>
      <ColorResults color={props.color} />
    </StyledRankedColorDiv>
  );
}

export default RankedColor;
