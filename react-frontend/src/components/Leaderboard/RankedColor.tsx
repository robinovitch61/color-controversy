import React from 'react';
import { ModelsColor } from 'colorapi/dist/ccapi';
import ColorResults from '../Judge/ColorResults';
import {
  StyledRankedColorDiv,
  StyledRankedColorBoxDiv,
} from '../../style/style';
import isDark from '../../misc/brightness';

interface RankedColorProps {
  rank: number;
  color: ModelsColor;
}

function RankedColor(props: RankedColorProps) {
  return (
    <StyledRankedColorDiv className={'ranked-color'}>
      <p style={{ fontSize: '1.4em' }}>
        #{props.rank < 10 ? '0' + props.rank : props.rank}
      </p>
      <StyledRankedColorBoxDiv
        style={{
          color: isDark(props.color.hex) ? 'white' : 'black',
        }}
        hexColor={props.color.hex}
      >
        <p className='hex-text'>{props.color.hex}</p>
      </StyledRankedColorBoxDiv>
      <ColorResults color={props.color} />
    </StyledRankedColorDiv>
  );
}

export default RankedColor;
