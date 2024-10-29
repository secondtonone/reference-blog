import { useCallback } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import CategoriesList from '~/components/organisms/categories-list';
import Pagination from '~/components/organisms/pagination';
import PaginationLink from '~/components/organisms/pagination/pagination-link';
import PostCard, { PostCardProps } from '~/components/organisms/post-card';
import { getLimitedText, cleanTags } from '~/utils';
import { sendAnalyticEvent } from '~/analytics';

import {
  ArticleViewModel,
  CategoriesViewModel
} from '~/view-model';

import {
  Column,
  Columns,
  Container,
  BoxAdaptive,
  TextContent,
  ButtonLink
} from '~/components/atoms';
import { BoxAdaptiveProps } from '~/components/atoms/box-adaptive';

export interface ArticlesListProps extends Omit<PostCardProps, 'isLarge'> {
  articles: ArticleViewModel[],
  largeCount?: number,
  cardsShow?: number,
  tags?: CategoriesViewModel,
  buttonText?: React.ReactNode,
  category?: React.ReactNode
  categorySlug?: string
  heading?: string
  caption?: string
  pagination?: boolean,
  unwrapped?: boolean,
  perLine?: number,
  unlinkedTitle?: boolean,
  anchor?: string,
  renderEmpty?: () => React.ReactNode,
  onLoadArticles?: (page?: number) => void,
  disabledLoad?: boolean,
  loading?: boolean,
  itemsCount?: number,
  pageActive?: number,
  nextPage?: number,
  perPage?: number,
  styles?: BoxAdaptiveProps,
}

export const ArticlesList: React.FC<ArticlesListProps> = ({
  articles,
  breakpoint,
  'data-test': dataTest,
  largeCount = 2,
  perLine,
  tags,
  buttonText,
  category,
  categorySlug,
  caption,
  pagination = false,
  horizontal = false,
  noShare = false,
  onlyText,
  unwrapped,
  heading,
  anchor,
  renderBanner = null,
  renderEmpty = null,
  onLoadArticles,
  disabledLoad,
  loading,
  itemsCount,
  pageActive,
  perPage,
  nextPage,
  unlinkedTitle,
  level,
  styles = {}
}) => {
  const { isPhone, isDesktop } = breakpoint;

  const horizontalPerLine = horizontal && perLine ? perLine : 1;
  const defaultPerLine = perLine || 3;

  const loadMoreHandler = useCallback((e) => {
    if (typeof onLoadArticles === 'function') {
      onLoadArticles();
    }
    sendAnalyticEvent('pagination-showmore');
    e.preventDefault();
  }, [onLoadArticles]);

  const paginationHandler = useCallback((...params) => {
    if (typeof onLoadArticles === 'function') {
      onLoadArticles(...params);
    }
    sendAnalyticEvent('pagination-by-page');
  }, [onLoadArticles]);

  return (
    <ArticlesStyled
      mt={{
        _: '10px',
        sm: 0
      }}
      data-test={dataTest || `articles-list${horizontal ? '-horizontal' : ''}`}
      unwrapped={unwrapped}
      id={anchor}
    >
      <Container>
        <BoxAdaptive {...styles}>
          {(category || heading) && (
            <>
              <TextContentStyled
                fontSize={{ _: 9, sm: 19 }}
                fontWeight={{ _: 'accent' }}
                letterSpacing="0.0145em"
                accentFont
                mb={{ sm: onlyText ? 40 : 0 }}
                level={unlinkedTitle ? 1 : null}
              >
                <TextContent accentFont data-test="category-title">
                  {heading || (
                    unlinkedTitle || !categorySlug
                      ? category
                      : (
                        <Link href={`/blog/category/${categorySlug}`}>
                          <a target="_blank">
                            {category}
                          </a>
                        </Link>
                      ))}
                </TextContent>
              </TextContentStyled>
              {caption && (
                <BoxAdaptive
                  mt={{ _: 5 }}
                  maxWidth={{
                    sm: '90%',
                    md: 660
                  }}
                >
                  <TextContentStyled
                    fontSize={{ _: 3 }}
                    lineHeight={1.5}
                    data-test="category-caption"
                  >
                    {caption}
                  </TextContentStyled>
                </BoxAdaptive>
              )}
            </>
          )}
          {tags?.length > 0 && (
            <BoxAdaptive
              mt={{
                _: 15,
                sm: 24
              }}
              mr={{
                _: '-15px',
                sm: 0
              }}
              mb={{
                sm: '6px'
              }}
            >
              <CategoriesList
                slug={categorySlug}
                links={tags}
                isPhone={isPhone}
                step
              />
            </BoxAdaptive>
          )}
        </BoxAdaptive>
        {articles === null || articles?.length === 0
          ? (
            typeof renderEmpty === 'function' && renderEmpty()
          ) : (
            <>
              <Columns
                overflowY={{
                  _: unwrapped ? 'hidden' : 'visible'
                }}
                flexWrap={{
                  _: unwrapped ? 'nowrap' : 'wrap',
                  sm: 'wrap'
                }}
              >
                {
                  articles?.map(
                    (
                      {
                        id,
                        title,
                        preview,
                        previewImage,
                        altPreviewImage,
                        ...props
                      }, idx
                    ) => {
                      const isLarge = idx < largeCount;
                      const showBanner = idx === (largeCount + 2) && renderBanner;
                      const columnSize: { sm: string, md?: string } = { sm: !showBanner ? '50%' : '100%' };

                      const postCardProps = {
                        id,
                        isLarge,
                        noShare,
                        onlyText,
                        horizontal,
                        breakpoint,
                        level,
                        ...props,
                        title: cleanTags(getLimitedText(title, true, 110)),
                        preview: cleanTags(getLimitedText(preview, isPhone, isPhone ? 200 : 300)),
                        previewImage: previewImage || 'banners/no-image-placeholder.jpg',
                        altPreviewImage: previewImage ? altPreviewImage || cleanTags(title) : 'Image Placeholder'
                      };

                      return (
                        <Column
                          key={`post-card-${id}`}
                          data-test={`post-card-${isLarge ? 'large' : (horizontal ? 'horizontal' : 'small')}`}
                          width={isLarge ? columnSize : {
                            ...columnSize,
                            md: `${100 / (horizontal ? horizontalPerLine : defaultPerLine)}%`
                          }}
                        >
                          <PostCard
                            {...postCardProps}
                            renderBanner={showBanner && renderBanner}
                          />
                        </Column>
                      );
                    }
                  )
                }
              </Columns>
              {buttonText && (
                <BoxAdaptive
                  mt={!pagination
                    ? {
                      _: 32,
                      sm: 52
                    }
                    : {
                      _: 60,
                      sm: 65,
                      lg: 85
                    }}
                  display={{
                    _: 'block',
                    sm: 'flex'
                  }}
                  justifyContent={pagination ? { sm: 'space-between' } : null}
                  width="100%"
                  ml="auto"
                  mr="auto"
                >
                  <PaginationLink page={nextPage}>
                    {(url) => (
                      <ButtonLink
                        wide
                        href={!disabledLoad ? url : null}
                        animated={!loading}
                        use={!loading ? 'secondary' : 'primary'}
                        loading={loading}
                        style={pagination
                          ? { maxWidth: 481 }
                          : null}
                        onClick={loadMoreHandler}
                        disabled={disabledLoad}
                        data-test="load-more"
                      >
                        {buttonText}
                      </ButtonLink>
                    )}
                  </PaginationLink>
                  {pagination && (
                    <BoxAdaptive
                      mt={{
                        _: 6,
                        sm: 0
                      }}
                      ml={{
                        sm: 40
                      }}
                    >
                      {typeof pageActive === 'number'
                        && itemsCount > 0
                        && perPage > 0
                        && typeof onLoadArticles === 'function' && (
                          <Pagination
                            pageActive={pageActive}
                            onPageClick={paginationHandler}
                            itemsCount={itemsCount}
                            perPage={perPage}
                            short={!isDesktop}
                          />
                      )}
                    </BoxAdaptive>
                  )}
                </BoxAdaptive>
              )}
            </>
          )}
      </Container>
    </ArticlesStyled>
  );
};

const ArticlesStyled = styled(BoxAdaptive)<{ unwrapped: boolean }>`
  ${({ unwrapped }) => (unwrapped ? `
    article {
      margin-left: 0;
      min-width: 240px;
      padding-bottom: 20px;
    }
  ` : '')}
`;

const TextContentStyled = styled(TextContent)`
  color: ${({ theme }) => (theme[theme.isLight ? 'opposed' : 'white'])};
`;

export default ArticlesList;
