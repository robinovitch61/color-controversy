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
      <StyledChoiceButtonsDiv>
        <ColorChoice text={props.firstOption} clickHandler={() => props.onColorChoice(props.firstOption)} />
        <p>or</p>
        <ColorChoice text={props.secondOption} clickHandler={() => props.onColorChoice(props.secondOption)} />
      </StyledChoiceButtonsDiv>
    </StyledChoicesDiv>
  );
}

export default ColorChoices;
