import styled from 'styled-components';
import {
  BoxAdaptive,
  Container,
} from '~/components/atoms';
import { typographyFonts } from '~/styles';

import { getScheme } from '~/styles/scheme';
// import { sendAnalyticEvent } from '~/analytics';

import MainMenu from './main-menu';

const lightTheme = getScheme();

interface Props {
  children?: React.ReactNode[]
}

const exampleNavbar: React.FC<Props> = ({ children = [] }) => (
  <MainMenuStyled
    data-test="main-menu"
    py={14}
    display={{ _: 'none', md: 'block' }}
    fontWeight="normal"
  >
    <Container full>
      <BoxAdaptive
        display="flex"
        justifyContent="space-between"
      >
        <MainMenu />
        <RightMenu data-test="right-menu">
          {children.map((child, idx) => (
            // eslint-disable-next-line react/no-array-index-key
            <li key={`right-menu-item-${idx}`}>{child}</li>
          ))}
        </RightMenu>
      </BoxAdaptive>
    </Container>
  </MainMenuStyled>
);

const MainMenuStyled = styled(BoxAdaptive)`
  background: ${lightTheme.opposed};
  color: ${({ theme }) => (theme.secondary4)};
  overflow: hidden;
`;

const Menu = styled.ul`
  & li {
    list-style-type: none;
    display: inline-block;
    vertical-align: middle;
    text-transform: ${typographyFonts.desc.menu.transform};
    cursor: pointer;

    + li {
      margin-left: 23px;
    }

    a {
      display: flex;
    }
  }

  & li:hover {
    color: ${({ theme }) => (theme.secondary3)};
  }
`;

const RightMenu = styled(Menu)`
  & li {
    color: ${({ theme }) => (theme.secondary3)};

    + li {
      margin-left: 20px;
    }
  }
`;

export default exampleNavbar;
