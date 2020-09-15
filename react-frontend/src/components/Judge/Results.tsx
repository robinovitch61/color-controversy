import React from 'react';
import { StyledCenteredP, StyledColorResultsDiv } from '../../style/style';
import { ModelsColor } from 'colorapi/dist/ccapi';
import ColorResults from './ColorResults';

interface ResultsProps {
  choice: string;
  color: ModelsColor;
  percentControversial: number;
}
function JudgementResult(props: ResultsProps) {
  return (
    <StyledColorResultsDiv>
      <StyledCenteredP>{`you said: ${props.choice}`}</StyledCenteredP>
      <ColorResults color={props.color} />
      <StyledCenteredP>
        you've been {props.percentControversial}% controversial
      </StyledCenteredP>
    </StyledColorResultsDiv>
  );
}

export default JudgementResult;
