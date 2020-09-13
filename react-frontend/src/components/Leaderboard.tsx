import React, { useEffect, useState } from 'react';
import RankedColor from './Leaderboard/RankedColor';
import api from '../connector/connector';
import { ModelsColor } from 'colorapi/dist/ccapi';
import { StyledContainerDiv } from '../style/style';

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

function Leaderboard(props: LeaderboardProps) {
  const [colors, setColors] = useState([defaultColor]);

  const updateColors = () => {
    const colors = getRankings().then((colors) => setColors(colors));
  };

  useEffect(() => {
    updateColors();
  }, []);

  const rankedColors = colors.map((color, idx) => (
    <RankedColor rank={idx + 1} color={color} />
  ));

  return <StyledContainerDiv>{rankedColors}</StyledContainerDiv>;
}

export default Leaderboard;
