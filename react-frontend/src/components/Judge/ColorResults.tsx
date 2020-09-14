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
  const fPerc = (nFirst / safeTotal(total)) * 100;
  const sPerc = (nSecond / safeTotal(total)) * 100;
  const firstResult = (
    <ColorResult color={firstOption} percentFloat={fPerc} count={nFirst} />
  );
  const secondResult = (
    <ColorResult color={secondOption} percentFloat={sPerc} count={nSecond} />
  );
  const firstBigger = fPerc > sPerc;
  return (
    <StyledFlexDiv>
      {firstBigger ? firstResult : secondResult}
      {firstBigger ? secondResult : firstResult}
    </StyledFlexDiv>
  );
}

export default ColorResults;
