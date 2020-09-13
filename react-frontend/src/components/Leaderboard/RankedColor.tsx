import React, {useState, useEffect} from 'react';
import { ModelsColor } from 'colorapi/dist/ccapi';
import ColorResults from '../Judge/ColorResults';

interface RankedColorProps {
  color: ModelsColor
}

function RankedColor(props: RankedColorProps) {
  return (
    <ColorResults color={props.color}/>
  )
}

export default RankedColor;