import styled from 'styled-components';
import Link from 'next/link';

import { BannerColor } from '~/styles/palette';
import { getScheme } from '~/styles/scheme';
import BackgroundPaletteViewModel from '~/view-model/background-palette.view-model';

import {
  BoxAdaptive,
  TextContent,
  Image,
} from '~/components/atoms';

export interface IArticleCardProps extends BackgroundPaletteViewModel {
  id?: number | string | any,
  previewImage?: string;
  altPreviewImage?: string;
  title?: string;
  timeToRead?: number;
  url?: string,
}

const lightTheme = getScheme();

const ArticleCard: React.FC<IArticleCardProps> = ({
  url,
  previewImage,
  altPreviewImage,
  title,
  timeToRead,
  background
}) => {
  let articleUrl = '/blog/';

  if (url) {
    articleUrl = url.includes('blog') ? `/${url}` : `/blog/${url}`;
  }

  return (
    <ArticleCardStyled
      display="flex"
      flexDirection={{ _: 'column', md: 'row' }}
      data-test="article-card"
    >
      {
        previewImage && (
          <BoxAdaptive
            mr={{ xm: '18px' }}
            mb={{ _: '16px', md: 0 }}
            width={{ _: '100%', md: '175px' }}
            height={{ _: '168px', md: '102px' }}
            borderRadius="10px"
            overflow="hidden"
            flexShrink={0}
          >
            <Link href={articleUrl} passHref>
              <LinkStyled
                title={title}
                rel="noreferrer"
                target="_blank"
                data-test="article-card-link-image"
                background={background}
              >
                <ImageStyled
                  src={previewImage}
                  alt={altPreviewImage || title}
                  isLazy
                  data-test="article-card-image"
                  svg={previewImage?.endsWith('svg')}
                />
              </LinkStyled>
            </Link>
          </BoxAdaptive>
        )
      }
      <BoxAdaptive
        display="flex"
        flexDirection="column"
        color={lightTheme.opposed}
      >
        {title && (
          <BoxAdaptive>
            <TextContent
              level={3}
              lineHeight={{ _: '22.4px', md: '28.6px' }}
              fontSize={{ _: '16px', md: '22px' }}
            >
              <Link href={articleUrl} passHref>
                <a
                  title={title}
                  rel="noreferrer"
                  target="_blank"
                  data-test="article-card-link-title"
                >
                  {title}
                </a>
              </Link>
            </TextContent>
          </BoxAdaptive>
        )}
        {
          timeToRead && (
            <BoxAdaptive
              mt={{ _: '6px', md: '16px' }}
            >
              <TextContent
                data-test="article-card-time-to-read"
                fontWeight={{ _: 'normal' }}
                fontSize={{ _: 1, sm: 2 }}
                lineHeight={{ _: '19.2px', md: '22.4px' }}
              >
                {timeToRead}
                {' '}
                min read
              </TextContent>
            </BoxAdaptive>
          )
        }
      </BoxAdaptive>
    </ArticleCardStyled>
  );
};

const ArticleCardStyled = styled(BoxAdaptive)`
  & [data-test=article-card-time-to-read] {
    color: ${({ theme }) => (theme.isLight ? theme.opposed : theme.white)};
  }

  &  a {
    color: ${({ theme }) => (theme.isLight ? theme.opposed : theme.white)};
  }
`;

const LinkStyled = styled.a<{ background?: BannerColor }>`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  background-color: ${({ background }) => (background ? lightTheme[background] : undefined)};
  align-items: center;
  justify-content: center;
`;

const ImageStyled = styled(Image)<{ svg?: boolean }>`
  max-width: 100%;
  margin: auto;
  display: flex;
  object-fit: ${({ svg }) => (svg ? '' : 'cover')};
  width: ${({ svg }) => (svg ? 'auto' : '100%')};
  height: ${({ svg }) => (svg ? '88%' : '100%')};
`;

export default ArticleCard;
