import React, { useEffect, useState } from 'react';
import ColorGrid from './AllColors/ColorGrid';
import api from '../connector/connector';

async function getColors() {
  const colors = await api.allColors({});
  return colors.body;
}

interface AllColorsProps {
  colors: string[];
}

function AllColors(props: AllColorsProps) {
  const [colors, setColors] = useState(['']);

  const updateColors = () => {
    const colors = getColors().then((colors) => setColors(colors));
  };

  useEffect(() => {
    updateColors();
  }, []);

  return <ColorGrid colors={colors} />;
}

export default AllColors;
