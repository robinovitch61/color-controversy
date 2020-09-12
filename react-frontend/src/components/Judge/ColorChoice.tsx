import React from 'react';
import { StyledJudgeButton } from '../../style/style';

interface ColorChoiceProps {
  onColorChoice: (chosenColor: string) => void;
  colorOption: string;
}
function ColorChoice(props: ColorChoiceProps) {
  return (
    <StyledJudgeButton onClick={() => props.onColorChoice(props.colorOption)}>{props.colorOption}</StyledJudgeButton>
  );
}

export default ColorChoice;
