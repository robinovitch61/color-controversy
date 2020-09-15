import React from 'react';
import { StyledJudgeButton } from '../../style/style';

interface JudgeButtonProps {
  handleClick: any;
  text: string;
}

function JudgeButton(props: JudgeButtonProps) {
  return (
    <StyledJudgeButton onClick={props.handleClick}>
      {props.text}
    </StyledJudgeButton>
  );
}

export default JudgeButton;
