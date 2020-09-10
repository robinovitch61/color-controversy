import React from 'react';
import { StyledJudgeButton } from '../../style/style';

interface JudgeButtonProps {
  text: string;
}

function JudgeButton(props: JudgeButtonProps) {
  return <StyledJudgeButton>{props.text}</StyledJudgeButton>;
}

export default JudgeButton;
