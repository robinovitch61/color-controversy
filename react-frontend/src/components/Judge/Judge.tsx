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
import { RouteComponentProps, useHistory } from 'react-router-dom';

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

interface JudgeParams {
  hexColor: string;
}

const removeHashFromHexColor = (hexColor: string) => {
  if (hexColor.slice(0, 1) === '#') {
    return hexColor.slice(1);
  } else {
    return hexColor;
  }
};

const addHashToHexColor = (hexColor: string) => {
  return '#' + hexColor;
};

function Judge({ match }: RouteComponentProps<JudgeParams>) {
  const [color, setColor] = useState(defaultColor);
  const [choice, setChoice] = useState('');
  const [numJudged, setNumJudged] = useState(0);
  const [isJudging, setIsJudging] = useState(true);
  let history = useHistory();

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
    if (!localStorage.getItem(color.hex)) {
      setChoice(chosenColor); // this is shown in the results
      submitChoice(color.hex, chosenColor);
      setNumJudged((prev) => prev + 1);
      includeChoiceInColor(chosenColor);
    }
    setIsJudging(false);
  };

  const setColorFromHex = (hexColor: string) => {
    colorFromHex(addHashToHexColor(hexColor)).then((color) => {
      setColor(color);
    });
  };

  const getRandomHexAndSetColor = () => {
    randomColor().then((color) => {
      setColor(color);
      // history.push(`/${removeHashFromHexColor(color.hex)}`);
      history.push('/');
    });
  };

  const setNextColor = () => {
    setIsJudging(true);
    getRandomHexAndSetColor();
  };

  // set initial color
  useEffect(() => {
    console.log(localStorage.getItem('myCat'));
    if (match.params.hexColor) {
      setColorFromHex(match.params.hexColor);
    } else {
      getRandomHexAndSetColor();
    }
  }, []);

  return (
    <StyledJudgeContainerDiv>
      <StyledColorSquareAndResultsDiv>
        <StyledColorSquareToJudgeDiv inputColor={color.hex}>
          {!isJudging ? (
            localStorage.getItem(color.hex) ? (
              <StyledColorResultsDiv>
                you've already judged me
              </StyledColorResultsDiv>
            ) : (
              <Results
                choice={choice}
                color={color}
                percentControversial={numJudged} // TODO
              />
            )
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
