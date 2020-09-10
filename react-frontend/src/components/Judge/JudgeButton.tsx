import React from 'react';
import { StyledJudgeButton } from '../../style/style';

interface JudgeButtonProps {
  onClick: () => void;
  text: string;
}

function JudgeButton(props: JudgeButtonProps) {
  return <StyledJudgeButton
  onClick={props.onClick}>{props.text}</StyledJudgeButton>;
}

export default JudgeButton;
