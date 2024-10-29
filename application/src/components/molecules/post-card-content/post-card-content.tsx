import Link from 'next/link';
import styled from 'styled-components';
import { PostCardCategory } from '..';
import { BoxAdaptive } from '~/components/atoms';
import TextContent, { TextContentProps } from '~/components/atoms/text-content';
import SvgIcon from '~/components/containers/svg-icon';
import { getDate } from '~/utils';
import {
  CategoryViewModel,
  AuthorViewModel,
  CardSizeViewModel,
  BreakpointViewModel
} from '~/view-model';

export interface PostCardContentProps extends CardSizeViewModel {
  noShare?: boolean,
  onlyText?: boolean,
  category: CategoryViewModel,
  timeToRead?: number,
  isHot?: boolean,
  timeBelow?: boolean,
  url: string,
  title: string,
  author?: AuthorViewModel,
  preview: string,
  publishedAt?: number,
  editedAt?: number,
  breakpoint?: BreakpointViewModel,
  share?: number
  level?: TextContentProps['level']
}

const noShare = true;

const Author = ({ children }) => (
  <NoWrapStyled mr={{ _: 3, sm: 4 }} mb={3}>
    {children}
  </NoWrapStyled>
);

const PostCardContent: React.FC<PostCardContentProps> = (
  {
    horizontal = false,
    isLarge = false,
    category,
    timeToRead,
    isHot,
    url,
    title,
    author = null,
    preview,
    publishedAt,
    editedAt,
    onlyText,
    share = 0,
    level = 3,
  }
) => (
  <ContentStyled
    data-test={`content-${category.lang}`}
    as="article"
    horizontal={horizontal}
  >
    {!horizontal ? (
      <PostCardCategory
        isLarge={isLarge}
        category={category}
        timeToRead={timeToRead}
        isHot={isHot}
        onlyText={onlyText}
      />
    ) : null}
    <BoxAdaptive mt={!horizontal ? { _: 4, sm: 5, lg: 4 } : null}>
      <TextContent
        overflow="hidden"
        fontSize={{ _: 3, sm: 6, md: isLarge ? 8 : 6 }}
        fontWeight={{ _: 'bold' }}
        level={level}
        maxWidth={isLarge || horizontal ? '100%' : '90%'}
        maxHeight={{
          _: 45, sm: 87, md: isLarge ? 90 : 80
        }}
        lineHeight={{ _: 1.4, md: isLarge ? 1.2 : 1.28 }}
        letterSpacing={0.2}
        accentFont
        style={{ wordBreak: 'break-word' }}
      >
        <Link href={url} passHref>
          <HeadingLinkStyled data-test="title">
            {title}
          </HeadingLinkStyled>
        </Link>
      </TextContent>
      <CaptionStyled
        lineHeight={1.65}
        mt={{ sm: 2 }}
        mb={{ _: 4, lg: horizontal ? 4 : 5 }}
        fontSize={{ _: 2, md: 3 }}
        fontWeight="light"
        maxWidth={isLarge ? '98%' : '100%'}
        data-test="description"
        letterSpacing={0.1}
      >
        {preview}
      </CaptionStyled>
      <MetaStyled
        maxWidth={isLarge ? '100%' : '90%'}
        fontSize={{ _: 1, sm: 2 }}
        lineHeight={1}
        data-test="meta"
        display="flex"
        flexDirection="row"
        alignItems="center"
        flexWrap="wrap"
      >
        {author && (
          author?.isPublic && (author?.name || author?.username) ? (
            <Link href={`/user/${author?.alias ? author.alias.toLowerCase() : author?.id}/`}>
              <a data-test="author-name" target="_blank">
                <Author>
                  {author?.name || author?.username}
                </Author>
              </a>
            </Link>
          ) : <Author>{author?.name || author?.username}</Author>
        )}
        {horizontal && (
          <PostCardCategory
            isLarge={isLarge}
            category={category}
            isHot={isHot}
            onlyText={onlyText}
          />
        )}
        {(editedAt || publishedAt) && (
          <NoWrapStyled
            mr={!onlyText && { _: 3, sm: 5 }}
            mb={3}
            data-test="date"
          >
            {getDate(editedAt || publishedAt)}
          </NoWrapStyled>
        )}
        {onlyText && (
          <BoxAdaptive
            data-test="time-to-read"
            display="flex"
            ml={{ _: 3, sm: 4 }}
            mb={3}
          >
            {timeToRead ? (
              <TextContent fontWeight={{ _: 'normal' }}>
                {timeToRead}
                {' '}
                min read
              </TextContent>
            ) : null}
          </BoxAdaptive>
        )}
        {!noShare && (
          <BoxAdaptive
            display="flex"
            marginRight="15px"
            alignItems="center"
            justifyContent={{ md: isLarge ? 'center' : 'flex-start' }}
            isLarge={isLarge}
            data-test="share"
            mb={3}
          >
            <BoxAdaptive
              width={{ _: 12, sm: 15 }}
              height={{ _: 12, md: 13 }}
              mr={{ _: 2, sm: '10px' }}
            >
              <SvgIcon code="share" />
            </BoxAdaptive>
            <span>{share}</span>
          </BoxAdaptive>
        )}

      </MetaStyled>
    </BoxAdaptive>
  </ContentStyled>
);

const HeadingLinkStyled = styled.a`
  transition: .15s color;
  color: ${({ theme }) => (theme.isLight ? theme.opposed : theme.secondary5)};

  &:hover {
    color: ${({ theme }) => theme.orangeBrand};
    transition: .15s color;
  }
`;

const ContentStyled = styled(BoxAdaptive)<{ as?: string, horizontal?: boolean }>`
  display: flex;
  flex-direction: column;
  flex: 1;
  color: ${({ theme }) => (theme.isLight ? theme.opposed : theme.secondary5)};
  margin-left: ${({ horizontal }) => (horizontal ? '40px' : '')};
  width: 100%;
`;

const NoWrapStyled = styled(TextContent)`
  white-space: nowrap;
`;

const CaptionStyled = styled(TextContent)`
  display: flex;
  color: ${({ theme }) => (theme.isLight ? theme.secondary5 : theme.secondary4)};
  overflow: hidden;
`;

const MetaStyled = styled(BoxAdaptive)`
  display: flex;
  color: ${({ theme }) => (theme.isLight ? theme.secondary4 : theme.secondary3)};
`;

export default PostCardContent;
