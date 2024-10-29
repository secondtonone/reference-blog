import styled from 'styled-components';
import SecondaryButton from './secondary-button';
import buttonSelector from '../button-selector';

const AnimatedButton = styled(SecondaryButton)<{ border?: boolean, loading?: boolean }>`
  & button[class*="${buttonSelector}"] {
    position: relative;
    z-index: 0;
    overflow: hidden;

    @media (min-width: 1280px) {
      &:before {
        content: '';
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        background: ${({ theme }) => theme.accentWarning};
        transform: translate(-50%, -50%);
        transition: none;
        border-radius: 50%;
        z-index: -1;
      }
    }
  }

  & button[class*="${buttonSelector}"]:hover {
    @media (min-width: 1280px) {
      color: ${({ theme }) => theme.white} !important;

      &:before {
        width: 130%;
        height: 0;
        padding-bottom: 140%;
        transition: all 0.42s cubic-bezier(.17,.67,1,-0.75);
      }
    }
  }

  & button[class*="${buttonSelector}"]:active {
    @media (min-width: 1280px) {
      &:before {
        background-color: ${({ theme }) => theme.orangeDarkest} !important;
      }
    }
  }
`;

export default AnimatedButton;
