import React from 'react';
import { Color as ModelsColor } from '../../services/staticDataService';
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

  return (
    <StyledFlexDiv>
      <ColorResult
        color={firstOption}
        percentFloat={fPerc}
        textBelow={`${nFirst}`}
      />
      <ColorResult
        color={secondOption}
        percentFloat={sPerc}
        textBelow={`${nSecond}`}
      />
    </StyledFlexDiv>
  );
}

export default ColorResults;
