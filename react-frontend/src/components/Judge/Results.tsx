import React from 'react';
import ColorResult from './ColorResult';
import {
  StyledCenteredP,
  StyledFlexDiv,
  StyledColorResultsDiv,
} from '../../style/style';

interface ResultsProps {
  choice: string
  firstOption: string
  secondOption: string
  firstPerc: number
  secondPerc: number
  nFirst: number
  nSecond: number
  percentControversial: number
}
function Results(props: ResultsProps) {
  return (
    <StyledColorResultsDiv>
      <StyledCenteredP>{`you said: ${props.choice}`}</StyledCenteredP>
      <StyledFlexDiv>
        <ColorResult color={props.firstOption} percent={props.firstPerc} count={props.nFirst}/>
        <ColorResult color={props.secondOption} percent={props.secondPerc} count={props.nSecond}/>
      </StyledFlexDiv>
      <StyledCenteredP>you've been {props.percentControversial}% controversial</StyledCenteredP>
    </StyledColorResultsDiv>
  );
}

export default Results;
