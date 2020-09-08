import React, { useState, useEffect } from 'react';
import api from '../connector/connector';
import { ModelsColor } from 'colorapi/dist/ccapi';
import JudgeButton from './JudgeButton';

async function getColor(): Promise<ModelsColor> {
  const result = await api.randomColor({});
  return result.body;
}

function Judge() {
  const [color, setColor] = useState('');
  const [firstOption, setfirstOption] = useState('');
  const [secondOption, setsecondOption] = useState('');

  // set initial color
  useEffect(() => {
    getColor().then((color) => {
      setColor(color.hex);
      setfirstOption(color.firstOption);
      setsecondOption(color.secondOption);
    });
  }, []);

  return (
    <div className={'container judge'}>
      <div
        className={'judge-color'}
        style={{ backgroundColor: `${color}` }}
      ></div>
      <JudgeButton text={firstOption}></JudgeButton>
      <JudgeButton text={secondOption}></JudgeButton>
    </div>
  );
}

export default Judge;
