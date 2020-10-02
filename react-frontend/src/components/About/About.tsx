import React from 'react';
import { StyledContainerDiv, StyledTitleDiv } from '../../style/style';
import sensitivities from './cone_sensitivities.svg';
import flourescent from './cool_white_flourescent.svg';
import colorSelection from './color_selection.gif';
import Header from '../Header';

const header = <Header />;

function About() {
  return (
    <div>
      {header}
      <StyledTitleDiv>
        <h2>why?</h2>
      </StyledTitleDiv>
      <StyledContainerDiv className='about'>
        <h2>What are colors anyway?</h2>
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
          <img
            style={{ width: '80%' }}
            alt='cone-sensitivities'
            src={sensitivities}
          />
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
          <img
            style={{ width: '90%' }}
            alt='cool-white-flourescent-distribution'
            src={flourescent}
          />
        </div>
        <p>
          Our cone cells individually process the input distribution, filtering
          different wavelength intensities in accordance with their response
          curve. Then our brain gets a single aggregate signal and interprets it
          as a color.
        </p>
        <p>
          There are some{' '}
          <a
            style={{ color: 'red' }}
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.sapiens.org/language/color-perception/'
          >
            cultural effects going on
          </a>{' '}
          during color determination, too.
        </p>
        <p>
          If you want more on color theory, I highly recommend{' '}
          <a
            style={{ color: 'red' }}
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.youtube.com/watch?v=AS1OHMW873s'
          >
            John Austin's talk from Strange Loop.
          </a>
        </p>
        <p>
          So some friends and I were talking about colors one day and how we all
          see colors a bit differently and how that's neat.
        </p>
        <p>
          But is there a color that is interpreted differently THE MOST? Is
          there a most controversial color? Well, (if I contrive an ongoing
          survey and collect data about it), the answer is yes, of course!
        </p>
        <p>
          Contribute your judgement to a few colors here at Color Controversy
          and you too can contribute to ultimate color truth.
        </p>
        <br />
        <h2>How did you pick the colors to show?</h2>
        <p>
          Randall Munroe from XKCD did a{' '}
          <a
            style={{ color: 'red' }}
            target='_blank'
            rel='noopener noreferrer'
            href='https://blog.xkcd.com/2010/05/03/color-survey-results/'
          >
            pretty awesome online color survey
          </a>{' '}
          back in 2010.
        </p>
        <p>
          I plotted the fully saturated faces of the RGB cube and overlaid my
          plots with his color survey boundaries, clicking around the boundaries
          to collect some subset of probably-controversial colors.
        </p>
        <p>DaTa sCiEnCe.</p>
        <p>It looked like this:</p>
        <div style={{ width: '100%', textAlign: 'center' }}>
          <img
            style={{ width: '90%' }}
            alt='overlaying-xkcd-on-my-plots'
            src={colorSelection}
          />
        </div>
        <br />
        <h2>More plz:</h2>
        <p>
          Source code for this site can be found{' '}
          <a
            style={{ color: 'red' }}
            target='_blank'
            rel='noopener noreferrer'
            href='https://github.com/robinovitch61/color-controversy'
          >
            here on github.
          </a>
        </p>
        <p>
          I am Leo. My stuff is{' '}
          <a
            style={{ color: 'red' }}
            target='_blank'
            rel='noopener noreferrer'
            href='https://leorobinovitch.com/'
          >
            here on the internet.
          </a>
        </p>
      </StyledContainerDiv>
    </div>
  );
}

export default About;
