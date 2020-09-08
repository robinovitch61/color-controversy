import React from 'react';

interface JudgeButtonProps {
  text: string
}

function JudgeButton(props: JudgeButtonProps) {
  return (
      <button className={"judge-btn"}>{props.text}</button>
  );
}

export default JudgeButton;
