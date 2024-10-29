import React from 'react';
import styled from 'styled-components';
import {
  space,
  SpaceProps,
  color,
  ColorProps,
  flex,
  FlexProps,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  typography,
  TypographyProps,
  position,
  PositionProps,
  border,
  BorderProps,
  compose
} from 'styled-system';

import shouldForwardProp from '~/styles/should-forward-prop';

export type BoxAdaptiveProps =
  SpaceProps &
  ColorProps &
  LayoutProps &
  FlexProps &
  FlexboxProps &
  TypographyProps &
  BorderProps &
  PositionProps;

const BoxAdaptive: React.FC<BoxAdaptiveProps> = React.forwardRef(({
  children,
  ...props
}, ref) => (
  <BoxStyled ref={ref} {...props}>
    {children}
  </BoxStyled>
));

const BoxStyled = styled.div.withConfig({ shouldForwardProp })<BoxAdaptiveProps>`
  ${compose(
    space,
    color,
    layout,
    flex,
    flexbox,
    typography,
    border,
    position
  )}
`;

export default BoxAdaptive;
