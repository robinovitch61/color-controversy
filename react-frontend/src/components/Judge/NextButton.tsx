import React from 'react';
import JudgeButton from './JudgeButton';
import { StyledJudgeButtonContainerDiv } from '../../style/style';

interface NextButtonProps {
  onClick: () => void;
}
function NextButton(props: NextButtonProps) {
  return (
    <StyledJudgeButtonContainerDiv>
        <JudgeButton handleClick={props.onClick} text={'next'}/>
    </StyledJudgeButtonContainerDiv>
  );
}

export default NextButton;
