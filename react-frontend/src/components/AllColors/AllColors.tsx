import React, { useEffect, useState } from 'react';
import ColorGrid from './ColorGrid';
import api from '../../connector/connector';
import { useAsyncError } from '../ErrorBoundary';

async function getColors() {
  throw Error('blah');
  const colors = await api.allColors({});
  return colors.body;
}

function AllColors() {
  const [colors, setColors] = useState(['']);
  const throwError = useAsyncError();

  const updateColors = () => {
    getColors()
      .then((colors) => setColors(colors))
      .catch((e) => {
        throwError(new Error(`Error getting all colors: ${e}`));
      });
  };

  useEffect(() => {
    updateColors();
  }, []);

  return <ColorGrid colors={colors} />;
}

export default AllColors;
