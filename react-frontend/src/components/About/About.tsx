import React from 'react';
import { StyledContainerDiv, StyledTitleDiv } from '../../style/style';
import sensitivities from './cone_sensitivities.svg';
import flourescent from './cool_white_flourescent.svg';

function About() {
  return (
    <div>
      <StyledTitleDiv>
        <h2>why?</h2>
      </StyledTitleDiv>
      <StyledContainerDiv className='about'>
        <p>
          If you're reading this, it's likely you have millions of cone cells in
          your eyes. Not bad, eh?
        </p>
        <p>
          Not only that, trichromats, but you (probably) have three types -
          Short, Medium, and Long.
        </p>
        <p>
          Each type has its own response curve to light at various wavelengths:
        </p>
        <div style={{ width: '100%', textAlign: 'center' }}>
          <img style={{ width: '80%' }} src={sensitivities} />
        </div>
        <p>
          Due to genetic variation, we all have slightly different looking
          response curves.
        </p>
        <p>
          So light comes from the sun or some other source, maybe reflects off
          an object, then arrives at our eyes as a distribution of intensities
          at different wavelengths.
        </p>
        <p>Here is the distribution for "cool white" flourescent light:</p>
        <div style={{ width: '100%', textAlign: 'center' }}>
          <img style={{ width: '90%' }} src={flourescent} />
        </div>
        <p>
          Our cone cells individually process the input distribution, filtering
          different wavelength intensities in accordance to each of their
          response curves. Then our brain gets a single aggregate signal and
          interprets it to be a color.
        </p>
        <p>
          There's probably some cultural effects going on in color
          determination, too.
        </p>
        <p>
          So some friends and I were talking about colors one day and how we all
          see colors a bit differently and how that's neat.
        </p>
        <p>
          But is there a color that is interpreted differently THE MOST OFTEN?
          Is there a most controversial color? Well, (if you contrive an ongoing
          survey and collect data about it), the answer is yes, of course!
        </p>
        <p>Contribute your judgement to a few colors and you too can contribute to ultimate color truth.</p>

        <h2>How did you pick the colors to show?</h2>
        
      </StyledContainerDiv>
    </div>
  );
}

export default About;
