import React, { useEffect, useState } from 'react';
import { StyledJudgeButton } from '../../style/style';

const DEBOUNCE_TIME_MS = 300;

interface JudgeButtonProps {
  handleClick: () => void;
  text: string;
}

function JudgeButton(props: JudgeButtonProps) {
  const [handleClick, setHandleClick] = useState<() => void>();

  // debounce buttons in case of accidental double clicks
  useEffect(() => {
    setTimeout(() => {
      setHandleClick(() => props.handleClick);
    }, DEBOUNCE_TIME_MS);
  }, []);

  return (
    <StyledJudgeButton onClick={handleClick ? handleClick : () => {}}>
      {props.text}
    </StyledJudgeButton>
  );
}

export default JudgeButton;
