import styled from 'styled-components';
import { dimensions } from '~/styles';

import { brUp } from '~/styles/helpers';
import { getScheme } from '~/styles/scheme';

interface Props {
  className?: string;
}

const lightTheme = getScheme();

const CarouselDots: React.FC<Props> = ({ className, children }) => (
  <CarouselDotsStyled data-test="carousel-dots" className={className}>{children}</CarouselDotsStyled>
);

const CarouselDotsStyled = styled.div`
  position: absolute;
  bottom: 0 !important;
  z-index: 100;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 95%;
  margin: 0 auto;
  > span {
    width: 65px !important;
    height: 4px;
    border: 0;
    outline: none;
    position: relative;
    display: inline-block;
    background-color: transparent;
    cursor: pointer;
    opacity: 1 !important;
    margin: 0 !important;
    padding-bottom: 28px;

    ${brUp('sm', `
      padding-bottom: 38px;
    `)}

    ${brUp('lg', `
      width: 71px !important;
      padding-bottom: 38px;
    `)}

    &:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 4px;
      border-radius: ${dimensions.radiuses.xs};
      background: ${lightTheme.opposed};
      left: 0;
      top: 0;
      bottom: 0;
      opacity: 0.2;
    }

    &:not(:last-child) {
      margin: 0 9px 0 0 !important;

      ${brUp('lg', `
        margin: 0 10px 0 0 !important;
    `)}
    }

    &.-active:before {
      opacity: 1;
      background: ${lightTheme.opposed};
    }
  }
`;

export default CarouselDots;
