import React, { useState, useEffect } from 'react';
import api from '../../connector/connector';
import { ModelsColor } from 'colorapi/dist/ccapi';
import JudgeButton from './JudgeButton';
import {
  StyledContainerDiv,
  StyledJudgeColorDiv,
  StyledJudgementDiv,
  StyledJudgeButtonContainer,
} from '../../style/style';

async function getColor(): Promise<ModelsColor> {
  const result = await api.randomColor({});
  return result.body;
}

function Judge() {
  const [color, setColor] = useState('');
  const [firstOption, setfirstOption] = useState('');
  const [secondOption, setsecondOption] = useState('');
  const [numJudged, setNumJudged] = useState(0);
  const [isJudging, setIsJudging] = useState(false);

  function submitChoice(color: string, choice: string): void {
    // TODO: db id by color, make choice either actual color choice or just "first/second"
    console.log(color, choice, numJudged);
    api.submitChoice({body: { color, choice }});
    // setNumJudged((prev) => prev + 1);
    toggleIsJudging();
  }

  const toggleIsJudging = () => setIsJudging((prev) => !prev);

  // set initial color
  useEffect(() => {
    getColor().then((color) => {
      setColor(color.hex);
      setfirstOption(color.firstOption);
      setsecondOption(color.secondOption);
    });
  }, [numJudged]);

  return (
    <StyledContainerDiv>
      <StyledJudgeColorDiv
        style={{ backgroundColor: `${color}` }}
      ></StyledJudgeColorDiv>

      <StyledJudgementDiv>
        <p>is this color:</p>
        <StyledJudgeButtonContainer>
          <JudgeButton
            text={firstOption}
            onClick={() => submitChoice(color, firstOption)}
          ></JudgeButton>
          <p>OR</p>
          <JudgeButton
            text={secondOption}
            onClick={() => submitChoice(color, secondOption)}
          ></JudgeButton>
        </StyledJudgeButtonContainer>
      </StyledJudgementDiv>
    </StyledContainerDiv>
  );
}

export default Judge;
