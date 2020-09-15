import React, { useEffect, useState } from 'react';
import { StyledJudgeButton, StyledChoiceButtonsDiv } from '../../style/style';

interface NextButtonProps {
  onClick: any;
}
function NextButton(props: NextButtonProps) {
  const [handleClick, setHandleClick] = useState<any>(() => {});

  useEffect(() => {
    setTimeout(() => {
      setHandleClick(() => props.onClick);
    }, 400)
  }, []);

  return (
    <StyledChoiceButtonsDiv>
      <StyledJudgeButton onClick={handleClick}>next</StyledJudgeButton>
    </StyledChoiceButtonsDiv>
  );
}

export default NextButton;
