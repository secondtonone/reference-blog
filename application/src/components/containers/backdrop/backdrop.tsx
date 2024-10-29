import React from 'react';
import styled from 'styled-components';
import BoxAdaptive, { BoxAdaptiveProps } from '~/components/atoms/box-adaptive';

export interface BackdropProps extends BoxAdaptiveProps {
  isShifted?: boolean,
  transparent?: boolean
}

const Backdrop: React.FC<BoxAdaptiveProps> = ({
  children,
  relative,
  ...props
}) => (
  <BackdropStyled
    data-test="backdrop"
    position="fixed"
    top="0"
    left="0"
    right="0"
    bottom="0"
    zIndex="99"
    overflowY="auto"
    {...props}
  >
    {children}
  </BackdropStyled>
);

const BackdropStyled = styled(BoxAdaptive)<BackdropProps>`
  background: ${({ theme, transparent }) => (transparent
    ? (theme.isLight ? 'rgba(255, 255, 255, 0.9)' : 'rgba(23, 26, 34, 0.6)')
    : theme.background)};

  ${({ isShifted }) => (isShifted ? `
    div[data-popup-layout="shifted"] & {
      padding-top: 77px;
    }` : '')}
`;

export default Backdrop;
