import React from 'react';
import ColorChoice from './ColorChoice';
import { StyledChoicesDiv, StyledChoiceButtonsDiv } from '../../style/style';

interface ColorChoicesProps {
  firstOption: string;
  secondOption: string;
  onColorChoice: (chosenColor: string) => void;
}
function ColorChoices(props: ColorChoicesProps) {
  return (
    <StyledChoicesDiv>
      <p>is this color:</p>
      <StyledChoiceButtonsDiv>
        <ColorChoice colorOption={props.firstOption} onColorChoice={props.onColorChoice} />
        <p>or</p>
        <ColorChoice colorOption={props.secondOption} onColorChoice={props.onColorChoice} />
      </StyledChoiceButtonsDiv>
    </StyledChoicesDiv>
  );
}

export default ColorChoices;
