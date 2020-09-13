import React, {useState, useEffect} from 'react';
import { ModelsColor } from 'colorapi/dist/ccapi';
import ColorResults from '../Judge/ColorResults';

interface RankedColorProps {
  rank: number
  color: ModelsColor
}

function RankedColor(props: RankedColorProps) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center'
    }}>
    <p>#{props.rank}</p>
    <p style={{
      padding: '2em',
      backgroundColor: props.color.hex,
      margin: '1em'
    }}>{props.color.hex}</p>
    <ColorResults color={props.color}/>
    </div>
  )
}

export default RankedColor;