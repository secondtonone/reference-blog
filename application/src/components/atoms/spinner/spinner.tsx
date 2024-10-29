import styled, { keyframes } from 'styled-components';
import { themes } from '../../../styles';

interface SpinnerProps {
  size?: number;
}

const Spinner: React.FC<SpinnerProps> = ({ size = 65 }) => (
  <SpinStyled data-test="spinner">
    <svg width={size} height={size} viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle id="spinner" fill="none" stroke="url(#gradient_1)" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30" />
      <defs>
        <linearGradient id="gradient_1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={themes.light.orangeBrand} stopOpacity="0" />
          <stop offset="100%" stopColor={themes.light.orangeBrand} />
        </linearGradient>
        <linearGradient id="gradient_2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={themes.light.yellow} stopOpacity="0" />
          <stop offset="100%" stopColor={themes.light.yellow} />
        </linearGradient>
        <linearGradient id="gradient_3" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={themes.light.greenIllust} stopOpacity="0" />
          <stop offset="100%" stopColor={themes.light.greenIllust} />
        </linearGradient>
        <linearGradient id="gradient_4" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={themes.light.blueIllust} stopOpacity="0" />
          <stop offset="100%" stopColor={themes.light.blueIllust} />
        </linearGradient>
        <linearGradient id="gradient_5" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={themes.light.purpleBrand} stopOpacity="0" />
          <stop offset="100%" stopColor={themes.light.purpleBrand} />
        </linearGradient>
      </defs>
    </svg>
  </SpinStyled>
);

const DURATION = 1.4;
const OFFSET = 187;

const ColorsAnimation = keyframes`
  0% { stroke: url(#gradient_1);}
  20% { stroke: url(#gradient_2);}
  40% { stroke: url(#gradient_3);}
  60% { stroke: url(#gradient_4);}
  80% { stroke: url(#gradient_5);}
`;

const DashAnimation = keyframes`
  0% { stroke-dashoffset: ${OFFSET}; }
  50% {
    stroke-dashoffset: ${OFFSET / 4};
    transform: rotate(135deg);
  }
  100% {
    stroke-dashoffset: ${OFFSET};
    transform: rotate(450deg);
  }
`;
const SpinAnimation = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
`;

const SpinStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & svg {
    transform-origin: center;
    animation: ${SpinAnimation} ${DURATION}s infinite linear;
  }
  & #spinner {
    transform-origin: center;
    stroke-dasharray: ${OFFSET};
    stroke-dashoffset: 0;
    animation:
      ${ColorsAnimation} ${DURATION * 5}s infinite linear,
      ${DashAnimation} ${DURATION}s infinite ease-in-out;
  }
`;

export default Spinner;
