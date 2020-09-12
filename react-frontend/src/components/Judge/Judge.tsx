import React, { useState, useEffect } from 'react';
import api from '../../connector/connector';
import { ModelsColor } from 'colorapi/dist/ccapi';
import JudgeButton from './JudgeButton';
import {
  StyledContainerDiv,
  StyledJudgeColorP,
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
  const [choice, setChoice] = useState('');
  const [numJudged, setNumJudged] = useState(0);
  const [isJudging, setIsJudging] = useState(true);

  function submitChoice(): void {
    // TODO: db id by color, make choice either actual color choice or just "first/second"
    console.log(color, choice, numJudged);
    api.submitChoice({ body: { color, choice } });
    setNumJudged((prev) => prev + 1);
    setIsJudging(false);
  }

  const updateColor = () => {
    getColor().then((color) => {
      setColor(color.hex);
      setfirstOption(color.firstOption);
      setsecondOption(color.secondOption);
    });
  };

  // set initial color
  useEffect(() => {
    updateColor();
  }, []);

  const JudgementComp = (
    <StyledJudgementDiv>
      <p>is this color:</p>
      <StyledJudgeButtonContainer>
        <JudgeButton
          text={firstOption}
          onClick={() => {
            setChoice(firstOption);
            submitChoice();
          }}
        ></JudgeButton>
        <p>or</p>
        <JudgeButton
          text={secondOption}
          onClick={() => {
            setChoice(secondOption);
            submitChoice();
          }}
        ></JudgeButton>
      </StyledJudgeButtonContainer>
    </StyledJudgementDiv>
  );

  const ResultComp = (
    <StyledJudgementDiv>
      <JudgeButton
        text={'next'}
        onClick={() => {
          setIsJudging(true);
          updateColor();
        }}
      ></JudgeButton>
    </StyledJudgementDiv>
  );

  return (
    <StyledContainerDiv>
      <StyledJudgeColorP style={{ backgroundColor: `${color}` }}>
        <p style={{opacity: isJudging ? 0 : 100}}>{`you said: ${choice}`}</p>
      </StyledJudgeColorP>
      {isJudging ? JudgementComp : ResultComp}
    </StyledContainerDiv>
  );
}

export default Judge;
