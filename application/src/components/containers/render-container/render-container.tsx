import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import animations, { Animations } from '~/styles/animations';
import BoxAdaptive, { BoxAdaptiveProps } from '~/components/atoms/box-adaptive';

const EFFECT_MS = 400;

const makeAnimations = (currentAnimations: Animations[]) => css`animation: ${currentAnimations.map((name, index) => css`${animations[name]} ${EFFECT_MS}ms forwards ease-in-out ${index !== currentAnimations.length - 1 ? ',' : ''}`)};`;

interface Props extends BoxAdaptiveProps {
  isRendered?: boolean;
  inAnimation?: Animations[];
  outAnimation?: Animations[];
  animationStyles?: string
}

const RenderContainer: React.FC<Props> = ({
  isRendered,
  children,
  inAnimation = ['fadeIn'],
  outAnimation = ['fadeOut'],
  animationStyles = '',
  ...props
}) => {
  const [isVisible, setVisibility] = useState<boolean>();

  useEffect(() => {
    let timer: any = 0;
    if (isRendered) {
      setVisibility(isRendered);
    } else if (outAnimation) {
      timer = setTimeout(() => {
        setVisibility(isRendered);
        clearTimeout(timer);
      }, EFFECT_MS);
    } else {
      setVisibility(isRendered);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [isRendered]);

  return isVisible ? (
    <Container
      data-test="render-container"
      animation={isRendered ? makeAnimations(inAnimation) : makeAnimations(outAnimation)}
      animationStyles={animationStyles}
      position="fixed"
      {...props}
    >
      {children}
    </Container>
  ) : null;
};

const Container = styled(BoxAdaptive)<BoxAdaptiveProps & {
  animation: ReturnType<typeof makeAnimations>,
  animationStyles?: string, relative?: boolean
}>`
  z-index: 101;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  ${({ animationStyles }) => css`${animationStyles}`}
  ${({ animation }) => animation}
`;

export default RenderContainer;
