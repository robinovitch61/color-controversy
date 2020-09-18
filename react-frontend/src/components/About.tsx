import React from 'react';
import { StyledContainerDiv, StyledTitleDiv } from '../style/style';

function About() {
  return (
    <div>
      <StyledTitleDiv>
        <h2>why would you do this</h2>
      </StyledTitleDiv>
      <StyledContainerDiv className='about'>
        <p>
          There is very little collective agreement on anything. Colors are
          experienced by every person differently. This is an attempt to
          quantify color perception. Add your perceptions with a few color
          judgements and you too can contribute to color truth.
        </p>
      </StyledContainerDiv>
    </div>
  );
}

export default About;
