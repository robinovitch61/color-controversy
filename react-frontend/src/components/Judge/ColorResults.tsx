import React from 'react';
import { ModelsColor } from 'colorapi/dist/ccapi';
import ColorResult from './ColorResult';
import { StyledFlexDiv } from '../../style/style';

interface ColorResultsProps {
  color: ModelsColor;
}

const safeTotal = (total: number) => (total <= 0 ? 1e10 : total);

function ColorResults(props: ColorResultsProps) {
  const { firstOption, secondOption, nFirst, nSecond } = props.color;
  const total = nFirst + nSecond;
  const firstPerc = parseInt(((nFirst / safeTotal(total)) * 100).toString());
  const secondPerc = parseInt(((nSecond / safeTotal(total)) * 100).toString());
  return (
    <StyledFlexDiv>
      <ColorResult color={firstOption} percent={firstPerc} count={nFirst} />
      <ColorResult color={secondOption} percent={secondPerc} count={nSecond} />
    </StyledFlexDiv>
  );
}

export default ColorResults;
