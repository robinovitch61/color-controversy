import React, { useEffect, useState } from 'react';
import { StyledJudgeButton } from '../../style/style';

type JudgeButtonOnClick = (val: string) => void;
const defaultClickHandler = () => {};

interface JudgeButtonProps {
  onClick: any;
  text: string;
}
function JudgeButton(props: JudgeButtonProps) {
  const [clickHandler, setClickHandler] = useState<any>(defaultClickHandler);

  useEffect(() => {
    // debounce next button in case of accidental double click
    // console.log('disabled!');
    // setTimeout(() => {
    //   console.log('enabled!');
    setClickHandler(() => props.onClick());
    // }, 400);
  }, []);

  return (
    <StyledJudgeButton
      onClick={clickHandler ? clickHandler : defaultClickHandler}
    >
      {props.text}
    </StyledJudgeButton>
  );
}

export default JudgeButton;
