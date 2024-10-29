import styled from 'styled-components';
import Link from 'next/link';
import BoxAdaptive from '~/components/atoms/box-adaptive';
import Container from '~/components/atoms/container';
import TextContent from '~/components/atoms/text-content';
import Image from '~/components/atoms/image';

import BlogBreadcrumbs from '~/components/containers/blog-breadcrumbs';
import getDate from '~/utils/get-date';
import dropTags from '~/utils/drop-tags';
import getScheme from '~/styles/scheme/scheme';
import ArticleViewModel from '~/view-model/article.view-model';

const lightTheme = getScheme();

interface Props extends ArticleViewModel {
  withCategory?: boolean,
  stepLeft?: boolean,
  renderTop?: React.ReactNode
}

const CATEGORY_PREFIX = '/blog/category';

const ArticleHeading: React.FC<Props> = ({
  previewImage,
  title,
  author,
  publishedAt,
  editedAt,
  background,
  category,
  timeToRead,
  withCategory,
  altPreviewImage,
  children,
  renderTop,
  stepLeft
}) => (
  <ArticleHeadingStyled
    data-test="article-heading"
    background={background}
    pb={{ _: 35, sm: 42, md: 28 }}
  >
    {renderTop}
    <Container>
      {children}
      <BoxAdaptive
        display={{ xm: 'flex' }}
      >
        <TextContainer
          flex="1"
          pl={{
            _: 0, lg: stepLeft ? 58 : 0
          }}
        >
          <BlogBreadcrumbs
            hideMain={category?.parent !== null}
            links={
                [
                  category?.parent?.slug
                    ? {
                      url: `${CATEGORY_PREFIX}/${category.parent.slug}`,
                      name: `${category?.parent?.name} /`
                    } : null,
                  {
                    url: category?.lang === 'en' && category?.parent?.slug
                      ? `${CATEGORY_PREFIX}/${category?.parent?.slug}/${category?.slug}`
                      : `${CATEGORY_PREFIX}/${category?.slug}`,
                    name: category?.name
                  }
                ]
              }
          />
          <TitleStyled
            fontSize={{
              _: 7, sm: 12, md: 14, lg: 19
            }}
            lineHeight={{ _: 1.25 }}
            mt={{ _: 5, sm: 9 }}
            mb={{ _: 5, sm: 8, lg: 7 }}
            maxWidth={{
              _: 250, x: 280, sm: 410, md: 480, lg: 680
            }}
            level={1}
            data-test="heading-text"
            accentFont
          >
            {dropTags(title)}
          </TitleStyled>
          <MetaStyled
            fontSize={{ _: 1, md: 2 }}
            textAlign={{ _: 'left' }}
          >
            {withCategory
              ? (
                <CategoryStyled
                  data-test="category"
                >
                  <Link href={`/blog/category/${category?.slug}`}>
                    <a data-test="category-link" target="_blank" rel="noopener">
                      {category?.name}
                    </a>
                  </Link>
                </CategoryStyled>
              )
              : null}
            {author && (
              <>
                <p data-test="author">
                  {author?.isPublic && (author?.name || author?.username) ? (
                    <Link href={`/user/${author?.alias || author?.id}/`}>
                      <a target="_blank" rel="noopener">
                        {author?.name || author?.username || ''}
                      </a>
                    </Link>
                  ) : <>{author?.name || author?.username || ''}</>}
                </p>
              </>
            )}
            <span data-test="date">
              {getDate(editedAt || publishedAt)}
            </span>
            <span data-test="time-to-read">
              {timeToRead}
              {' '}
              min read
            </span>
          </MetaStyled>
        </TextContainer>
        <ImageStyled
          width={{
            _: 228, x: 258, xm: 200, sm: 250, md: 340
          }}
          height={{
            _: 185, x: 210, xm: 200, sm: 200, md: 248
          }}
          ml={{ sm: 'auto' }}
          mr={{ sm: 'auto' }}
          mt={{ _: 35, x: 45, sm: 52 }}
          pr={{
            _: 0
          }}
          display="flex"
          justifyContent={{ _: 'flex-end', md: 'flex-start', lg: 'flex-end' }}
          position="relative"
          svg={previewImage?.endsWith('svg')}
        >
          {previewImage && (
            <Image
              data-test="image"
              src={previewImage}
              alt={altPreviewImage || dropTags(title)}
              width="340"
              height="248"
            />
          )}
        </ImageStyled>
      </BoxAdaptive>
    </Container>
  </ArticleHeadingStyled>
);

const TextContainer = styled(BoxAdaptive)`
  @media (max-width: 1366px) {
    padding-left: 0;
  }
`;

const ImageStyled = styled(BoxAdaptive)<{ svg?: boolean }>`
  img {
    pointer-events: none;
    object-fit: ${({ svg }) => (svg ? 'contain' : 'cover')};
    width: ${({ svg }) => (svg ? 'auto' : '100%')};
    height: ${({ svg }) => (svg ? 'auto' : '100%')};
    max-height: 100%;
  }
  @media (max-width: 1366px) {
    padding-right: 0;
  }
`;

const ArticleHeadingStyled = styled(BoxAdaptive)<{ background?: string }>`
  width: 100%;
  background: ${({ background }) => lightTheme[background || 'orangeIllust']};
  color: ${lightTheme.opposed};
`;

const CategoryStyled = styled.strong`
  font-weight: 700;
`;

const MetaStyled = styled(TextContent)`
  display: flex;
  flex-wrap: wrap;
  white-space: nowrap;

  > * {
    margin-right: 12px;
    margin-bottom: 10px;

    @media (min-width: 768px) {
      margin-right: 20px;
    }
  }
`;

const TitleStyled = styled(TextContent)`
  word-break: break-word;
  overflow-wrap: break-word;
`;

export default ArticleHeading;
