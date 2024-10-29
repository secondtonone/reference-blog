import Link from 'next/link';
import styled from 'styled-components';
import { BoxAdaptive, Image } from '~/components/atoms';
import { getScheme } from '~/styles/scheme';
import { BackgroundPaletteViewModel } from '~/view-model';

const lightTheme = getScheme();

interface Props extends BackgroundPaletteViewModel {
  horizontal?: boolean,
  isLarge?: boolean,
  url: string,
  previewImage: string,
  altPreviewImage: string,
  dataTest?: string
}

const PostCardImage: React.FC<Props> = (
  {
    horizontal = false,
    isLarge = false,
    url,
    previewImage,
    altPreviewImage,
    background
  }
) => (
  <ImageStyled
    mb={!horizontal ? { _: 4, sm: 6, md: isLarge ? 7 : 6 } : null}
    width={horizontal ? 310 : '100%'}
    height={{
      _: 168, x: 190, sm: 188, md: isLarge ? 282 : 180
    }}
    data-test="image"
    background={background}
    svg={previewImage?.endsWith('svg')}
  >
    <Link href={url} scroll={false}>
      <a data-test="image-link">
        <Image
          height={isLarge ? '250' : '190'}
          width={isLarge ? '310' : '158'}
          isLazy
          src={previewImage}
          alt={altPreviewImage}
        />
      </a>
    </Link>
  </ImageStyled>
);

const ImageStyled = styled(BoxAdaptive)<BackgroundPaletteViewModel & { svg?: boolean }>`
  border-radius: 10px;
  overflow: hidden;

  a {
    display: flex;
    width: 100%;
    height: 100%;
    position: relative;
    background-color: ${({ background }) => lightTheme[background || 'orangeIllust']};

    img {
      max-width: 100%;
      display: flex;
      margin: auto;
      object-fit: ${({ svg }) => (svg ? '' : 'cover')};
      width: ${({ svg }) => (svg ? 'auto' : '100%')};
      height: ${({ svg }) => (svg ? '88%' : '100%')};
    }
  }
`;

export default PostCardImage;
