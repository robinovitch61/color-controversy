import React, { useEffect, useState } from 'react';
import ColorGrid from './ColorGrid';
import api from '../../connector/connector';

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

  return <ColorGrid colors={colors} />;
}

export default AllColors;
