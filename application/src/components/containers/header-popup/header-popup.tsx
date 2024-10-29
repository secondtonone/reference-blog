import React, { useCallback } from 'react';
import { ButtonIcon, Container, BoxAdaptive } from '~/components/atoms';
import { useWithPopup, useKeyboard, useRender } from '~/hooks';
import Backdrop from '~/components/containers/backdrop';
import useLockScroll from '~/hooks/use-lock-scroll';
import RenderContainer from '~/components/containers/render-container';

interface Props {
  name: string;
  fixed?: boolean
}

const HeaderPopup: React.FC<Props> = ({
  children,
  name,
  fixed = true
}) => {
  const { hide } = useWithPopup(name);

  const onHide = useCallback(() => {
    if (hide) hide();
    if ('history' in window) {
      window.history.back();
    }
  }, [hide]);

  const {
    isRendered,
    turnOut
  } = useRender(onHide);

  useLockScroll(fixed);

  useKeyboard('Escape', turnOut);

  return (
    <RenderContainer
      isRendered={isRendered}
      inAnimation={['screwIn', 'fadeIn']}
      outAnimation={['screwOut', 'fadeOut']}
      animationStyles="transform-origin: top;"
      position={fixed ? 'fixed' : 'relative'}
    >
      <Backdrop pt={fixed ? { _: 50, sm: 70, md: 93 } : 0} isShifted position={fixed ? 'fixed' : 'relative'}>
        <Container data-test={`${name}-popup`}>
          <BoxAdaptive pt={{ _: 40, md: fixed ? 79 : 53 }} pb={76}>
            <BoxAdaptive
              position="absolute"
              top={{ _: 25, sm: fixed ? 119 : 64, md: fixed ? 119 : 93 }}
              right={{
                _: 15, x: 24, sm: 45, lg: 0
              }}
              width="auto"
            >
              <ButtonIcon code="close" border colored onClick={turnOut} />
            </BoxAdaptive>
            {children}
          </BoxAdaptive>
        </Container>
      </Backdrop>
    </RenderContainer>
  );
};

export default HeaderPopup;
