import React from 'react';
import { StyledColorDiv } from '../../style/style';
import { Link } from 'react-router-dom';

interface ColorProps {
  hexColor: string;
  nColorsPerRow: number;
  marginPerc: number;
}

function Color(props: ColorProps) {
  return (
    <StyledColorDiv
      color={props.hexColor}
      marginPerc={props.marginPerc}
      nColorsPerRow={props.nColorsPerRow}
    >
      <Link
        to={{
          pathname: `/`,
          state: props.hexColor,
        }}
      />
    </StyledColorDiv>
  );
}

export default Color;
