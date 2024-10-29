import styled from 'styled-components';
import Link from 'next/link';
import { BoxAdaptive, Container, TextContent } from '~/components/atoms';
import { getDate, getLimitedText, cleanTags } from '~/utils';

import { ArticleViewModel, BreakpointViewModel } from '~/view-model';
import { getScheme } from '~/styles/scheme';

const lightTheme = getScheme();

interface ArticlePreviewProps extends ArticleViewModel {
  withPreview?: boolean
  isHorizontal?: boolean
  card?: boolean
  breakpoint: BreakpointViewModel
}

const ArticlePreview: React.FC<ArticlePreviewProps> = ({
  previewImage,
  title,
  altPreviewImage,
  preview,
  publishedAt,
  editedAt,
  category,
  url,
  background,
  timeToRead,
  withPreview,
  isHorizontal,
  card,
  breakpoint
}) => {
  const imageProps = {
    'data-test': 'image',
    height: 250,
    width: 310,
    src: previewImage,
    alt: altPreviewImage || title
  };

  const { isPhone } = breakpoint;

  const isColumn = !isHorizontal;

  return (
    <ArticlePreviewStyled
      data-test="article-preview"
      background={card ? 'transparent' : background}
      svg={previewImage?.endsWith('svg')}
      as="article"
    >
      <Container shrink>
        <ArticleStyled
          height="100%"
          pt={{
            _: card ? 28 : 40,
            sm: (isColumn || card ? 50 : 70),
          }}
          pb={isColumn ? {
            _: 70,
            sm: 96
          } : {
            _: card ? 34 : 57,
            sm: card ? 42 : 70
          }}
          px={card ? { _: 28, sm: '60px' } : 0}
          maxWidth={{ _: isColumn ? 650 : '100%', lg: card ? '100%' : 1000 }}
          overflow={card ? 'hidden' : 'visible'}
          background={card ? background : 'transparent'}
          borderRadius={card ? '10px' : 0}
          mx={isColumn ? 'auto' : '0'}
          mt={card ? '26px' : 0}
          display="flex"
          flexDirection={isColumn ? 'column' : { _: 'column', lg: 'row-reverse' }}
          justifyContent={isColumn ? 'center' : 'space-between'}
          alignItems={card || isColumn ? 'center' : { _: 'center', lg: 'flex-start' }}
        >
          {previewImage && (
            <BoxAdaptive
              width={{ _: 230, x: 258, sm: 310 }}
              height={{ _: 185, x: 210, sm: 250 }}
              mx={isColumn ? 'auto' : '0'}
              mb={isColumn ? { _: 26, sm: 38 } : { _: 26, lg: 0 }}
              position="relative"
            >
              <Link href={`/${url}`} passHref>
                <LinkStyled data-test="heading-image-link">
                  <img
                    {...imageProps}
                    src={imageProps.src}
                    alt={imageProps.alt}
                  />
                </LinkStyled>
              </Link>
            </BoxAdaptive>
          )}
          <BoxAdaptive
            maxWidth={{ _: card ? '100%' : 280, sm: 680, lg: 1010 }}
            height="100%"
            display="flex"
            flexDirection="column"
            justifyContent={isColumn ? 'flex-end' : 'flex-start'}
            alignItems={isColumn ? 'center' : { _: 'center', lg: 'flex-start' }}
          >
            <TextContent
              textAlign={isColumn ? { _: 'center' } : { _: 'center', lg: 'left' }}
              fontSize={{ _: 7, sm: card ? 11 : 16 }}
              fontWeight={{ _: 'accent' }}
              lineHeight={{ _: card ? 1.2 : 1.25 }}
              marginBottom={{ _: withPreview ? 2 : 4 }}
              maxWidth={isColumn ? 700 : 660}
              maxHeight={{ _: 85, sm: 150, lg: card ? 114 : 100 }}
              overflow="hidden"
              level={2}
              data-test="heading-text"
              letterSpacing={0.25}
              accentFont
            >
              <Link href={`/${url}`}>
                <a data-test="heading-link">
                  {title}
                </a>
              </Link>
            </TextContent>
            {withPreview ? (
              <TextContent
                textAlign={isColumn ? { _: 'center' } : { _: 'center', lg: 'left' }}
                fontSize={{ _: 2, sm: 3 }}
                fontWeight={{ _: 'normal' }}
                lineHeight={{ _: 1.5 }}
                marginBottom={{ _: 34 }}
                maxWidth={isColumn ? 700 : (card ? 485 : 600)}
                overflow="hidden"
                level={0}
                data-test="preview-text"
              >
                {cleanTags(getLimitedText(preview, isPhone, isPhone ? 150 : 300))}
              </TextContent>
            ) : null}
            <BoxAdaptive
              fontSize={{ _: 1, md: 2 }}
              fontWeight={{ _: 'normal' }}
              textAlign={{ _: 'center' }}
              display={{ _: 'flex' }}
              justifyContent={{ _: isColumn ? 'center' : 'flex-start' }}
              flexDirection={{ _: 'row-reverse', sm: 'row' }}
              mx={card ? { _: '-20px', x: 0 } : null}
            >
              <span data-test="date">
                {' '}
                {getDate(editedAt || publishedAt)}
              </span>
              <CategoryStyled
                data-test="category"
                as="strong"
              >
                <Link href={`/blog/category/${category?.slug}`}>
                  <a data-test="category-link" target="_blank">
                    {category?.name}
                  </a>
                </Link>
              </CategoryStyled>
              {' '}
              <span data-test="time-to-read">
                {timeToRead}
                {' '}
                min read
              </span>
            </BoxAdaptive>
          </BoxAdaptive>
        </ArticleStyled>
      </Container>
    </ArticlePreviewStyled>
  );
};

const ArticleStyled = styled(BoxAdaptive)<{ background?: string, svg?: boolean }>`
  width: 100%;
  background: ${({ background }) => lightTheme[background] || background};
  color: ${lightTheme.opposed};
`;

const ArticlePreviewStyled = styled(ArticleStyled)<{ background?: string, svg?: boolean }>`
  width: 100%;
  background: ${({ background }) => lightTheme[background] || background};
  color: ${lightTheme.opposed};

  img {
    pointer-events: none;
    object-fit: ${({ svg }) => (svg ? 'contain' : 'cover')};
    display: flex;
    height: 100%;
  }
`;

const CategoryStyled = styled(TextContent)`
  margin: 0 20px;
  font-weight: 600;
`;

const LinkStyled = styled.a`
  width: 100%;
  height: 100%;
  display: inline-block;
`;

export default ArticlePreview;
