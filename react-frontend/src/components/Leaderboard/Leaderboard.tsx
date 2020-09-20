import React, { useEffect, useState } from 'react';
import RankedColor from './RankedColor';
import api from '../../connector/connector';
import { ModelsColor } from 'colorapi/dist/ccapi';
import { StyledRankingContainerDiv, StyledTitleDiv } from '../../style/style';

const SIMULATED_LOADING_TIME_MS = 0;

async function getRankings() {
  const colors = await api.ranking({ limit: 10 });
  return colors.body;
}

interface LeaderboardProps {
  colors: ModelsColor[];
}

const defaultColor: ModelsColor = {
  hex: '#000000',
  firstOption: '',
  secondOption: '',
  nFirst: 0,
  nSecond: 0,
};
const defaultColors = Array(10)
  .fill(defaultColor)
  .map((col, idx) => {
    return { ...col, hex: `#00000${idx.toString()}` };
  });

function Leaderboard(props: LeaderboardProps) {
  const [colors, setColors] = useState(defaultColors);
  const [isLoading, setIsLoading] = useState(true);

  const updateColors = () => {
    getRankings()
      .then((colors) => {
        setTimeout(() => {
          setColors(colors);
          setIsLoading(false);
        }, SIMULATED_LOADING_TIME_MS);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    updateColors();
  }, []);

  const rankedColors = colors.map((color, idx) => (
    <RankedColor key={color.hex} rank={idx + 1} color={color} />
  ));

  return (
    <div>
      <StyledTitleDiv>
        <h2>the most controversial</h2>
      </StyledTitleDiv>
      <StyledRankingContainerDiv>
        {isLoading ? <div></div> : rankedColors}
      </StyledRankingContainerDiv>
    </div>
  );
}

export default Leaderboard;
