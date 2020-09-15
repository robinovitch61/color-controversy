import React from 'react';
import JudgeButton from './JudgeButton';
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
        <JudgeButton
          text={props.firstOption}
          handleClick={() => props.onColorChoice(props.firstOption)}
        />
        <p>or</p>
        <JudgeButton
          text={props.secondOption}
          handleClick={() => props.onColorChoice(props.secondOption)}
        />
      </StyledChoiceButtonsDiv>
    </StyledChoicesDiv>
  );
}

export default ColorChoices;
