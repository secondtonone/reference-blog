import styled from 'styled-components';
import {
  flexbox, FlexBoxProps,
  space, SpaceProps,
  layout, LayoutProps, compose
} from 'styled-system';

import shouldForwardProp from '~/styles/should-forward-prop';

type Props = FlexBoxProps & SpaceProps & LayoutProps

const Column: React.FC<Props> = (props) => (
  <ColumnStyled
    p={{ _: '0 15px', lg: '0 20px' }}
    {...props}
  />
);

const ColumnStyled = styled.div.withConfig({ shouldForwardProp })<Props>`
  width: 100%;

  ${compose(
    space,
    layout,
    flexbox
  )}
`;

export default Column;
