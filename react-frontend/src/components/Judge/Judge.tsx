import React, { useState, useEffect } from 'react';
import api from '../../connector/connector';
import { ModelsColor } from 'colorapi/dist/ccapi';
import JudgeButton from './JudgeButton';
import { StyledContainerDiv, StyledJudgeColorDiv, StyledJudgementDiv, StyledJudgeButtonContainer } from '../../style/style';

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

      <StyledJudgementDiv>
        <p>is this color:</p>
        <StyledJudgeButtonContainer>
          <JudgeButton text={firstOption}></JudgeButton>
          <p>OR</p>
          <JudgeButton text={secondOption}></JudgeButton>
        </StyledJudgeButtonContainer>
      </StyledJudgementDiv>
    </StyledContainerDiv>
  );
}

export default Judge;
