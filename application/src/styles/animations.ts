import { keyframes, Keyframes } from 'styled-components';

const rollInLeft: Keyframes = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const rollOutLeft: Keyframes = keyframes`
  to {
    opacity: 0;
    transform: translateX(-100%);
  }
  from {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeIn: Keyframes = keyframes`
  from {
    opacity: 0;
  }
  80% {
    opacity: 0.3;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut: Keyframes = keyframes`
  to {
    opacity: 0;
  }
  80% {
    opacity: 0.9;
  }
  from {
    opacity: 1;
  }
`;

const screwIn: Keyframes = keyframes`
  from {
    transform: scale(1, 0.1);
  }
  to {
    transform: scale(1, 1);
  }
`;

const screwOut: Keyframes = keyframes`
  to {
    transform: scale(1, 0.1);
  }
  from {
    transform: scale(1, 1);
  }
`;

const screwOutRight: Keyframes = keyframes`
  to {
    transform: scaleX(1);
  }
  from {
    transform: scaleX(0.1);
  }
`;

const scaleIn: Keyframes = keyframes`
  to {
    transform: scale(1, 1);
  }
  from {
    transform: scale(0.1, 0.1);
  }
`;

const counter = (percent: number) => {
  let counters = `
    0% {
      counter-increment: count 0;
    }`;

  // eslint-disable-next-line no-plusplus
  for (let i = 1; i < percent; i++) {
    counters = `${counters}
    ${i}% {
      counter-increment: count ${i};
    }`;
  }

  counters = `${counters}
    100% {
      counter-increment: count ${percent};
    }`;

  return keyframes`${counters}`;
};

const animations = {
  rollInLeft, rollOutLeft, fadeIn, fadeOut, screwIn, screwOut, screwOutRight, counter, scaleIn
};

export type Animations = keyof Omit<typeof animations, 'counter'>;

export default animations;
