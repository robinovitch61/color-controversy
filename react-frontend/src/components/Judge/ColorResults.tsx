import React from 'react';
import { ModelsColor } from 'colorapi/dist/ccapi';
import ColorResult from './ColorResult';
import { StyledFlexDiv } from '../../style/style';

interface ColorResultsProps {
  isLoading: boolean;
  color: ModelsColor;
}

const safeTotal = (total: number) => (total <= 0 ? 1e10 : total);

function ColorResults(props: ColorResultsProps) {
  const { firstOption, secondOption, nFirst, nSecond } = props.color;
  const total = nFirst + nSecond;
  const fPerc = (nFirst / safeTotal(total)) * 100;
  const sPerc = (nSecond / safeTotal(total)) * 100;

  return props.isLoading ? (
    <StyledFlexDiv>
      <ColorResult color={'loading'} percentFloat={50} textBelow={'...'} />
      <ColorResult color={'loading'} percentFloat={50} textBelow={'...'} />
    </StyledFlexDiv>
  ) : (
    <StyledFlexDiv>
      <ColorResult
        color={firstOption}
        percentFloat={fPerc}
        textBelow={`${nFirst} votes`}
      />
      <ColorResult
        color={secondOption}
        percentFloat={sPerc}
        textBelow={`${nSecond} votes`}
      />
    </StyledFlexDiv>
  );
}

export default ColorResults;
