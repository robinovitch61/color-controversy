import React, { useState, useEffect } from 'react';
import api from '../../connector/connector';
import { ModelsColor } from 'colorapi/dist/ccapi';
import Results from './Results';
import NextButton from './NextButton';
import ColorChoices from './ColorChoices';
import {
  StyledContainerDiv,
  StyledColorSquareToJudgeDiv,
  StyledJudgeButton,
} from '../../style/style';

async function getColor(): Promise<ModelsColor> {
  const result = await api.randomColor({});
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

  function submitChoice(colorHex: string, choice: string): void {
    console.log(
      `Submitting choice: ${colorHex}, ${choice}, (${numJudged} judged)`
    );
    api.submitChoice({ body: { color: colorHex, choice: choice } });
  }

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
    setChoice(chosenColor);
    submitChoice(color.hex, chosenColor);
    setNumJudged((prev) => prev + 1);
    includeChoiceInColor(chosenColor);
    setIsJudging(false);
  };

  const updateColor = () => {
    getColor().then((color) => {
      console.log('updating color to:');
      console.log(color);
      setColor(color);
    });
  };

  const nextColor = () => {
    setIsJudging(true);
    updateColor();
  };

  // set initial color
  useEffect(() => {
    updateColor();
  }, []);

  return (
    <StyledContainerDiv>
      <StyledColorSquareToJudgeDiv inputColor={color.hex}>
        {!isJudging ? (
          <Results
            choice={choice}
            color={color}
            percentControversial={numJudged} // TODO
          />
        ) : undefined}
      </StyledColorSquareToJudgeDiv>
      {isJudging ? (
        <ColorChoices
          firstOption={color.firstOption}
          secondOption={color.secondOption}
          onColorChoice={onColorChoice}
        />
      ) : (
        <NextButton onClick={nextColor} />
      )}
    </StyledContainerDiv>
  );
}

export default Judge;
