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
    let isMounted = true; // helps protect against updating unmounted component due to async
    setTimeout(() => {
      if (isMounted) {
        setHandleClick(() => props.handleClick);
      }
    }, DEBOUNCE_TIME_MS);
    return () => { isMounted = false };
  }, [props.handleClick]);

  return (
    <StyledJudgeButton onClick={handleClick ? handleClick : () => {}}>
      {props.text}
    </StyledJudgeButton>
  );
}

export default JudgeButton;
