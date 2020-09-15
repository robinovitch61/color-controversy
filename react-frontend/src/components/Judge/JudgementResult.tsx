import React from 'react';
import { StyledCenteredP, StyledColorResultsDiv } from '../../style/style';
import { ModelsColor } from 'colorapi/dist/ccapi';
import ColorResults from './ColorResults';

interface JudgementResultProps {
  choice: string;
  color: ModelsColor;
  percentControversial: number;
}

function JudgementResult(props: JudgementResultProps) {
  const { choice, color, percentControversial } = props;

  return (
    <StyledColorResultsDiv>
      <StyledCenteredP>{`you said: ${choice}`}</StyledCenteredP>
      <ColorResults color={color} />
      <StyledCenteredP>
        you've been {percentControversial}% controversial
      </StyledCenteredP>
    </StyledColorResultsDiv>
  );
}

export default JudgementResult;
