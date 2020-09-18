import React, { useEffect, useState } from 'react';
import ColorGrid from './ColorGrid';
import api from '../../connector/connector';
import { StyledTitleDiv } from '../../style/style';

async function getColors() {
  const colors = await api.allColors({});
  return colors.body;
}

function AllColors() {
  const [colors, setColors] = useState(['']);

  const updateColors = () => {
    getColors().then((colors) => setColors(colors));
  };

  useEffect(() => {
    updateColors();
  }, []);

  return (
    <div>
      <StyledTitleDiv>
        <h2>click to judge</h2>
      </StyledTitleDiv>
      <ColorGrid colors={colors} />
    </div>
  );
}

export default AllColors;
