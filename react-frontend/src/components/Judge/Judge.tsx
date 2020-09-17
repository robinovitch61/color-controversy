import React, { useState, useEffect } from 'react';
import api from '../../connector/connector';
import { ModelsColor } from 'colorapi/dist/ccapi';
import JudgementResult from './Results';
import NextButton from './NextButton';
import ColorChoices from './ColorChoices';
import {
  StyledJudgeContainerDiv,
  StyledColorSquareAndResultsDiv,
  StyledColorSquareToJudgeDiv,
  StyledColorResultsDiv,
} from '../../style/style';
import { useLocation } from 'react-router-dom';
import {
  updateControversialCount,
  updateJudgeCount,
} from '../../store/actions';
import { useDispatch, useStore } from 'react-redux';
// import randomFace from '../../misc/faces';

const SIMULATE_LOADING_MS = 300;

async function randomColor(): Promise<ModelsColor> {
  const result = await api.randomColor({});
  return result.body;
}

async function colorFromHex(hexColor: string): Promise<ModelsColor> {
  const result = await api.getColor({ color: hexColor });
  return result.body;
}

const defaultColor: ModelsColor = {
  hex: '#f0f0f0',
  firstOption: '',
  secondOption: '',
  nFirst: 0,
  nSecond: 0,
};

function Judge() {
  const [isLoading, setIsLoading] = useState(true);
  const [color, setColor] = useState(defaultColor);
  const [choice, setChoice] = useState('');
  const [isJudging, setIsJudging] = useState(true);
  const location = useLocation(); // react router
  const dispatch = useDispatch(); // redux
  const store = useStore(); // redux

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

  const updateControversialness = (color: ModelsColor, choice: string) => {
    // update number judged
    dispatch(updateJudgeCount(1));

    // if the controversial choice was made, update controversial count
    if (color.nFirst !== color.nSecond) {
      const firstMajority = color.nFirst > color.nSecond;
      if (
        (choice === color.secondOption && firstMajority) ||
        (choice === color.firstOption && !firstMajority)
      ) {
        dispatch(updateControversialCount(1));
      }
    }
  };

  const onColorChoice = (chosenColor: string) => {
    setChoice(chosenColor); // this is shown in the results
    submitChoice(color.hex, chosenColor);
    updateControversialness(color, chosenColor);
    includeChoiceInColor(chosenColor);
    setIsJudging(false);
  };

  const setColorFromHex = (hexColor: string) => {
    colorFromHex(hexColor).then((color) => {
      setTimeout(() => {
        setColor(color);
        setIsLoading(false);
      }, SIMULATE_LOADING_MS);
    });
  };

  const getRandomHexAndSetColor = () => {
    randomColor().then((color) => {
      setTimeout(() => {
        setColor(color);
        setIsLoading(false);
      }, SIMULATE_LOADING_MS);
    });
  };

  const setNextColor = () => {
    setIsLoading(true);
    setIsJudging(true);
    getRandomHexAndSetColor();
  };

  const percentControversial = () => {
    const { judgeCount, controversialCount } = store.getState();
    return parseInt(((controversialCount / judgeCount) * 100).toString());
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

  return isLoading ? (
    <StyledJudgeContainerDiv>
      <StyledColorSquareAndResultsDiv>
        <StyledColorSquareToJudgeDiv inputColor={color.hex}>
          {/* <StyledColorResultsDiv>{randomFace()}</StyledColorResultsDiv> */}
          <StyledColorResultsDiv></StyledColorResultsDiv>
        </StyledColorSquareToJudgeDiv>
      </StyledColorSquareAndResultsDiv>
      <ColorChoices
        // actually super important these are different
        // as they act as keys in children, forcing
        // button remount
        firstOption={'~(˘▾˘~)'}
        secondOption={'(~˘▾˘)~'}
        onColorChoice={() => {}}
      />
    </StyledJudgeContainerDiv>
  ) : (
    <StyledJudgeContainerDiv>
      <StyledColorSquareAndResultsDiv>
        <StyledColorSquareToJudgeDiv inputColor={color.hex}>
          {!isJudging ? (
            <JudgementResult
              choice={choice}
              color={color}
              percentControversial={percentControversial()}
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
