import styled from 'styled-components';
import BoxAdaptive from '../box-adaptive';

import getScheme from '~/styles/scheme/scheme';

const lightTheme = getScheme();

const Draft = () => (
  <DraftStyled
    height={{ _: 18, md: 24 }}
  />
);

const DraftStyled = styled(BoxAdaptive)`
  background-image: url('https://static.example.com/semblog-next-static/icons/status/draft.svg');
  background-repeat: repeat-x;
  background-position: center;
  background-color: ${lightTheme.purpleBrand};
  position: absolute;
  right: 0;
  left: 0;
  width: 100%;
`;

export default Draft;
