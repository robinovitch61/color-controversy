import React, { useEffect, useState } from 'react';
import { StyledJudgeButton } from '../../style/style';

const defaultClickHandler = () => {};

interface ColorChoiceProps {
  clickHandler: any;
  text: string;
}
function ColorChoice(props: ColorChoiceProps) {
  const [clickHandler, setClickHandler] = useState(defaultClickHandler);

  useEffect(() => {
    setClickHandler(() => props.clickHandler)
  }, [])

  return (
    <StyledJudgeButton onClick={props.clickHandler}>
      {props.text}
    </StyledJudgeButton>
  );
}

export default ColorChoice;
