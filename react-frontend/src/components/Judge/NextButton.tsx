import React from 'react';
import { StyledNextButtonDiv, StyledJudgeButton, StyledChoiceButtonsDiv } from '../../style/style';

interface NextButtonProps {
  onClick: () => void;
}
function NextButton(props: NextButtonProps) {
  return (
    <StyledChoiceButtonsDiv>
      <StyledJudgeButton onClick={props.onClick}>next</StyledJudgeButton>
    </StyledChoiceButtonsDiv>
  );
}

export default NextButton;
