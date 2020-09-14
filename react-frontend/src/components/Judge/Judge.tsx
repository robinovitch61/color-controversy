import React, { useState, useEffect } from 'react';
import api from '../../connector/connector';
import { ModelsColor } from 'colorapi/dist/ccapi';
import Results from './Results';
import NextButton from './NextButton';
import ColorChoices from './ColorChoices';
import {
  StyledJudgeContainerDiv,
  StyledColorSquareAndResultsDiv,
  StyledColorSquareToJudgeDiv,
  StyledColorResultsDiv,
} from '../../style/style';
import { useLocation } from 'react-router-dom';

async function randomColor(): Promise<ModelsColor> {
  const result = await api.randomColor({});
  return result.body;
}

async function colorFromHex(hexColor: string): Promise<ModelsColor> {
  const result = await api.getColor({ color: hexColor });
  return result.body;
}

const defaultColor: ModelsColor = {
  hex: '#000000',
  firstOption: '',
  secondOption: '',
  nFirst: 0,
  nSecond: 0,
};

function Judge() {
  const [color, setColor] = useState(defaultColor);
  const [choice, setChoice] = useState('');
  const [numJudged, setNumJudged] = useState(0);
  const [isJudging, setIsJudging] = useState(true);
  const location = useLocation();

  function submitChoice(colorHex: string, choice: string): void {
    api.submitChoice({ body: { color: colorHex, choice: choice } });
  }

  // includes the users choice in the results shown
  const includeChoiceInColor = (choice: string) => {
    setColor((prevColor) => {
      return {
        ...prevColor,
        nFirst:
          choice === prevColor.firstOption
            ? prevColor.nFirst + 1
            : prevColor.nFirst,
        nSecond:
          choice === prevColor.secondOption
            ? prevColor.nSecond + 1
            : prevColor.nSecond,
      };
    });
  };

  const onColorChoice = (chosenColor: string) => {
    setChoice(chosenColor); // this is shown in the results
    submitChoice(color.hex, chosenColor);
    setNumJudged((prev) => prev + 1);
    includeChoiceInColor(chosenColor);
    setIsJudging(false);
  };

  const setColorFromHex = (hexColor: string) => {
    colorFromHex(hexColor).then((color) => {
      setColor(color);
    });
  };

  const getRandomHexAndSetColor = () => {
    randomColor().then((color) => {
      setColor(color);
    });
  };

  const setNextColor = () => {
    setIsJudging(true);
    getRandomHexAndSetColor();
  };

  // set initial color
  useEffect(() => {
    const hexColor = location.state as string;
    if (hexColor) {
      setColorFromHex(hexColor);
    } else {
      getRandomHexAndSetColor();
    }
  }, [location.state]);

  return (
    <StyledJudgeContainerDiv>
      <StyledColorSquareAndResultsDiv>
        <StyledColorSquareToJudgeDiv inputColor={color.hex}>
          {!isJudging ? (
            <Results
              choice={choice}
              color={color}
              percentControversial={numJudged} // TODO
            />
          ) : (
            <StyledColorResultsDiv>judge me</StyledColorResultsDiv>
          )}
        </StyledColorSquareToJudgeDiv>
      </StyledColorSquareAndResultsDiv>
      {isJudging ? (
        <ColorChoices
          firstOption={color.firstOption}
          secondOption={color.secondOption}
          onColorChoice={onColorChoice}
        />
      ) : (
        <NextButton onClick={setNextColor} />
      )}
    </StyledJudgeContainerDiv>
  );
}

export default Judge;
