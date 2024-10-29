import styled from 'styled-components';
import clsx from 'clsx';
import { md } from '~/styles/scheme/breakpoints';

import { exampleNavbar } from '~/components/organisms';

interface Props {
  isFixed?: boolean,
  isVisible?: boolean,
  isEnding?: boolean,
  renderTop?: React.ReactNode[]
}

const NavigationHeader: React.FC<Props> = ({
  isFixed,
  isVisible,
  isEnding,
  children,
  renderTop = []
}) => (
  <HeaderStyled
    data-test="header"
    isVisible={isVisible}
    isEnding={isEnding}
    isFixed={isFixed}
    className={clsx({ '-fixed': isFixed })}
  >
    <exampleNavbar>
      {renderTop}
    </exampleNavbar>
    {children}
  </HeaderStyled>
);

const transition = 'cubic-bezier(.25, .5, .75, 1)';

const HeaderStyled = styled.nav<{isVisible: boolean; isEnding: boolean, isFixed: boolean}>`
    z-index: 100;
    transform: translateY(${({ isEnding }) => (isEnding ? '-100%' : 0)});
    transition: transform 0.35s ${transition};
    will-change: transform;
    &.-fixed {
      transition: transform 0.25s ${transition};
    }

    @media (min-width: ${md}) {
      transform: translateY(${({ isEnding, isFixed }) => (!isFixed ? 0 : (isEnding ? '-100%' : '-38%'))});
    }
`;

export default NavigationHeader;
