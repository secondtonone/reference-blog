import React from 'react';
import { usePopupActionContext, useKeyboard, useRender } from '~/hooks';
import Backdrop, { BackdropProps } from '~/components/containers/backdrop';
import useLockScroll from '~/hooks/use-lock-scroll';
import RenderContainer from '~/components/containers/render-container';

interface Props extends BackdropProps {
  name?: string;
  children: (hide: () => void) => React.ReactNode
}

const PagePopup: React.FC<Props> = ({ children, name, ...props }) => {
  const { hide } = usePopupActionContext();
  const {
    isRendered,
    turnOut
  } = useRender(hide);
  useLockScroll();
  useKeyboard('Escape', turnOut);

  return (
    <RenderContainer isRendered={isRendered} animationStyles="opacity: 0;">
      <Backdrop
        pt={{ _: 50, sm: 70, md: 120 }}
        display="flex"
        justifyContent="center"
        alignItems="center"
        isShifted
        transparent
        {...props}
      >
        <div data-test={name ? `${name}-popup` : 'popup'} style={{ height: '100%' }}>
          {children(turnOut)}
        </div>
      </Backdrop>
    </RenderContainer>
  );
};

export default PagePopup;
