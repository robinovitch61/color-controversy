import React from 'react';
import {
  StyledColorDiv,
} from '../../style/style';
import { Link } from 'react-router-dom';

interface ColorProps {
  hexColor: string;
}

function Color(props: ColorProps) {
  return (
    <StyledColorDiv color={props.hexColor}>
      <Link to={`/${props.hexColor.slice(1)}`} />
    </StyledColorDiv>
  );
}

export default Color;
