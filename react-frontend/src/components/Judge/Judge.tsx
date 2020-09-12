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
import styled from 'styled-components'; // temp

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

  const StyledBarChartDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
  `;

  interface StyledVerticalColorBarDivProps {
    inputColor: string;
    barHeight: string;
  }
  const StyledVerticalColorBarDiv = styled.div`
    width: 20%;
    background-color: ${(p: StyledVerticalColorBarDivProps) =>
      p.inputColor || 'white'};
    height: ${(p: StyledVerticalColorBarDivProps) => p.barHeight || '0'}px;
  `;

  const ResultComp = (
    <div style={{ width: '100%', margin: '0 auto' }}>
      <div
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'space-between',
        }}
      >
        <p
          style={{
            width: '100%',
            textAlign: 'center',
          }}
        >
          you've been 100% controversial
        </p>
        <JudgeButton
          text={'next'}
          onClick={() => {
            setIsJudging(true);
            updateColor();
          }}
        ></JudgeButton>
      </div>
      <div
        style={{
          width: '100%',
          display: 'flex',
        }}
      >
        <div
          style={{
            width: '62%',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <p>62%</p>
          <p
            style={{
              width: '100%',
              margin: '0 auto',
              padding: '1em 0',
              backgroundColor: 'green',
              textAlign: 'center',
            }}
          >
            green
          </p>
          <p>132</p>
        </div>
        <div
          style={{
            width: '38%',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <p>38%</p>
          <p
            style={{
              width: '100%',
              margin: '0 auto',
              padding: '1em 0',
              backgroundColor: 'blue',
              textAlign: 'center',
            }}
          >
            blue
          </p>
          <p>59</p>
        </div>
      </div>
    </div>
  );

  return (
    <StyledContainerDiv>
      <StyledJudgeColorP style={{ backgroundColor: `${color}` }}>
        <p style={{ opacity: isJudging ? 0 : 100 }}>{`you said: ${choice}`}</p>
      </StyledJudgeColorP>
      {isJudging ? JudgementComp : ResultComp}
    </StyledContainerDiv>
  );
}

export default Judge;
