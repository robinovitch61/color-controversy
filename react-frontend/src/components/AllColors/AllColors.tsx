import React, { useEffect, useState } from 'react';
import ColorGrid from './ColorGrid';
import api from '../../connector/connector';
import { StyledTitleDiv } from '../../style/style';
import Header from '../Header';

const header = <Header />;

async function getColors() {
  const colors = await api.allColors({});
  return colors.body;
}

function AllColors() {
  const [colors, setColors] = useState(['']);

  const updateColors = () => {
    getColors()
      .then((colors) => setColors(colors))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    updateColors();
  }, []);

  return (
    <div>
      {header}
      <StyledTitleDiv>
        <h2>click to judge</h2>
      </StyledTitleDiv>
      <ColorGrid colors={colors} />
    </div>
  );
}

export default AllColors;
