import React from 'react';
import { StyledNextButtonDiv, StyledJudgeButton } from '../../style/style';

interface NextButtonProps {
  onClick: () => void;
}
function NextButton(props: NextButtonProps) {
  return (
    <StyledNextButtonDiv>
      <StyledJudgeButton onClick={props.onClick}>next</StyledJudgeButton>
    </StyledNextButtonDiv>
  );
}

export default NextButton;
