import { useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import clsx from 'clsx';

import isServer from '~/constants/is-server';
import animations from '~/styles/animations';

const lazyClass = 'lazyload';

interface Props {
  isLazy?: boolean
  src: string
  className?: string
  alt: string
  width?: string
  height?: string
  loading?: 'eager' | 'lazy'
}

const Image: React.FC<Props> = ({
  isLazy,
  src,
  alt,
  className = '',
  ...props
}) => {
  const image = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!isServer) {
      // @ts-ignore
      if ('lazySizes' in window && image.current) window.lazySizes?.loader?.unveil(image.current);
    }
  }, [src]);

  return (
    <ImageStyled
      ref={image}
      src={isLazy ? null : src}
      isLazy={isLazy}
      className={clsx(className, isLazy && lazyClass)}
      data-src={isLazy ? src : null}
      alt={alt}
      {...props}
    />
  );
};

const ImageStyled = styled.img<Pick<Props, 'isLazy'>>`
  transform-origin: center;
  ${({ isLazy }) => (!isLazy ? css`animation: ${animations.scaleIn} .1s linear;` : '')}
  &.lazyload  {
    opacity: 0;
    filter: blur(5px);
    transition: filter 400ms, opacity 400ms;
  }

  &.lazyloaded {
    opacity: 1;
  }
`;

export default Image;
