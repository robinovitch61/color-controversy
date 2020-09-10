import React, { useState, useEffect } from 'react';
import api from '../../connector/connector';
import { ModelsColor } from 'colorapi/dist/ccapi';
import JudgeButton from './JudgeButton';
import { StyledContainerDiv, StyledJudgeColorDiv } from '../../style/style';

async function getColor(): Promise<ModelsColor> {
  const result = await api.randomColor({});
  return result.body;
}

function Judge() {
  const [color, setColor] = useState('');
  const [firstOption, setfirstOption] = useState('');
  const [secondOption, setsecondOption] = useState('');

  // set initial color
  useEffect(() => {
    getColor().then((color) => {
      setColor(color.hex);
      setfirstOption(color.firstOption);
      setsecondOption(color.secondOption);
    });
  }, []);

  return (
    <StyledContainerDiv>
      <StyledJudgeColorDiv
        style={{ backgroundColor: `${color}` }}
      ></StyledJudgeColorDiv>

      <JudgeButton text={firstOption}></JudgeButton>
      <JudgeButton text={secondOption}></JudgeButton>
    </StyledContainerDiv>
  );
}

export default Judge;
