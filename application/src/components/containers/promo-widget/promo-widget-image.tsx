import styled from 'styled-components';
import Link from 'next/link';
import {
  TopProps, RightProps, BottomProps, LeftProps
} from 'styled-system';
import { BoxAdaptiveProps } from '~/components/atoms/box-adaptive';
import { BoxAdaptive, Image } from '~/components/atoms';
import { brUp } from '~/styles/helpers';

export interface PromoWidgetImageProps extends BoxAdaptiveProps {
  alt?: string;
  link: string;
  image: string;
  onClick?: () => void;
  ['data-test']?: string;
  imgHeight?: string;
  imgWidth?: string;
  imgTop?: TopProps,
  imgRight?: RightProps,
  imgLeft?: LeftProps,
  imgBottom?: BottomProps
}

const PromoWidgetImage: React.FC<PromoWidgetImageProps> = ({
  alt,
  link,
  image,
  onClick,
  'data-test': dataTest,
  imgHeight,
  imgWidth,
  imgTop,
  imgBottom,
  imgLeft,
  imgRight,
  ...props
}) => {
  const isWebp = image?.endsWith('webp');
  const top = imgTop;
  const right = imgRight;
  const bottom = imgBottom;
  const left = imgLeft;
  let srcset = '';

  if (isWebp) {
    const index = image.lastIndexOf('.webp');
    srcset = image.slice(0, index);
    image = `${srcset}.png`;
  }

  let picture = (
    <Image
      isLazy
      src={image}
      alt={alt}
      height={imgHeight}
      width={imgWidth}
      loading="lazy"
    />
  );

  if (isWebp) {
    picture = (
      <PictureStyled>
        <source
          type="image/webp"
          data-srcset={`${srcset}.webp`}
          data-test="promo-widget-image-source"
        />
        {picture}
      </PictureStyled>
    );
  }

  return (
    <ImageStyled
      top={top}
      right={right}
      left={left}
      bottom={bottom}
      {...props}
    >
      <Link href={link}>
        <a
          role="link"
          target="_blank"
          data-test={dataTest}
          onClick={onClick}
        >
          {picture}
        </a>
      </Link>
    </ImageStyled>
  );
};

const ImageStyled = styled(BoxAdaptive)`
  //background-color: ${({ theme }) => theme[theme.isLight ? 'opposed' : 'secondary5']};
  position: relative;

  a {
    display: inline-block;
    width: 100%;
    height: 100%;
  }

  ${brUp('xm', `
    float: right;
  `)}

  img {
    pointer-events: none;
    height: 100%;
  }
`;

const PictureStyled = styled.picture`
  display: inline-block;
  width: 100%;
  height: 100%;
`;

export default PromoWidgetImage;
