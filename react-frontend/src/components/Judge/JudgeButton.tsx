import React, { useEffect, useState } from 'react';
import { StyledJudgeButton } from '../../style/style';

interface JudgeButtonProps {
  handleClick: () => void;
  text: string;
}

function JudgeButton(props: JudgeButtonProps) {
  const [handleClick, setHandleClick] = useState<() => void>();

  // debounce buttons in case of accidental double clicks
  useEffect(() => {
    console.log('mounting JudgeButton')
    setTimeout(() => {
      setHandleClick(() => props.handleClick);
    }, 300);
  }, []);

  return (
    <StyledJudgeButton onClick={handleClick ? handleClick : () => {}}>
      {props.text}
    </StyledJudgeButton>
  );
}

export default JudgeButton;
