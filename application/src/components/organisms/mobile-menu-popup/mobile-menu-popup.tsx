import { FC, useState, useCallback } from 'react';
import styled from 'styled-components';
import {
  Button, BoxAdaptive, Logo, Container
} from '~/components/atoms';
import Backdrop from '~/components/containers/backdrop';
import SvgIcon from '~/components/containers/svg-icon';
import { LanguageSelector } from '~/components/organisms';
import useLockScroll from '~/hooks/use-lock-scroll';
import { getScheme } from '~/styles/scheme';
import { x, sm } from '~/styles/scheme/breakpoints';

const lightTheme = getScheme();

interface Props {
  onClose: () => void
  render: (toMain: () => void, gotTo: (index: number) => void) => React.ReactNode[]
}

const MobileMenuPopup: FC<Props> = ({
  onClose, render
}) => {
  const [currentMenu, setMenu] = useState<number>(0);

  const gotTo = useCallback((index: number) => {
    setMenu(index);
  }, []);

  const toMain = useCallback(() => {
    gotTo(0);
  }, []);

  useLockScroll();

  return (
    <Backdrop height="100vh" transparent>
      <CloseButton position="absolute" width="auto">
        <Button
          style={{ minWidth: '' }}
          data-test="mobile-menu-popup-close"
          use="tertiary"
          onClick={onClose}
          noborder
        >
          <SvgIcon size={[20, 20]} code="close" />
        </Button>
      </CloseButton>
      <MenuContainer height="100%" width={{ _: 270, x: 308, sm: 660 }} overflow="auto" data-test="mobile-menu-container">
        <BoxAdaptive minHeight="100vh" py={{ _: 14, sm: 23 }} pr={{ sm: 173 }} overflow="auto">
          <Container>
            <BoxAdaptive
              display="flex"
              justifyContent="space-between"
            >
              <Logo mb={{ _: 32, x: 40, sm: 80 }} />
              <LanguageSelector onClick={() => gotTo(1)} />
            </BoxAdaptive>
            {render(toMain, gotTo)[currentMenu]}
          </Container>
        </BoxAdaptive>
      </MenuContainer>
    </Backdrop>
  );
};

const MenuContainer = styled(BoxAdaptive)`
  background: ${lightTheme.opposed};
  color: ${lightTheme.white};
`;

const CloseButton = styled(BoxAdaptive)`
  top: 15px;
  right: 15px;

  @media (min-width: ${x}) {
    right: 25px;
  }

  @media (min-width: ${sm}) {
    top: 25px;
    right: 45px;
  }
`;

export default MobileMenuPopup;
