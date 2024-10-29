import { BoxAdaptive as PostCardItem } from '~/components/atoms';

import { PostCardImage } from '~/components/molecules';
import PostCardContent, { PostCardContentProps } from '~/components/molecules/post-card-content';
import { ArticleViewModel, BreakpointViewModel, CardSizeViewModel } from '~/view-model';

export interface PostCardProps extends CardSizeViewModel, Pick<PostCardContentProps, 'noShare' | 'onlyText' | 'level'> {
  'data-test'?: string
  breakpoint?: BreakpointViewModel
  renderBanner?: () => React.ReactNode
}

const PostCard: React.FC<PostCardProps & ArticleViewModel> = ({
  previewImage,
  altPreviewImage,
  title,
  preview,
  category,
  timeToRead,
  author,
  isLarge,
  url,
  publishedAt,
  editedAt,
  isHot,
  noShare = false,
  onlyText,
  horizontal = false,
  breakpoint,
  share,
  renderBanner,
  background,
  level,
}) => {
  const stepProps = { mt: { _: 30, sm: onlyText ? 20 : 47 } };

  const articleUrl = url.includes('https://') ? url : `/${url}`;

  const postCardItemDataTest = `post-card-item-${category.lang}`;

  const props = {
    category: {
      ...category,
      slug: category?.lang === 'en' && category?.parent ? `${category.parent.slug}/${category.slug}` : category.slug
    },
    url: articleUrl,
    title,
    preview,
    isHot,
    breakpoint,
    onlyText,
    share,
    level
  };

  if (horizontal) {
    const horizontalProps = {
      ...props,
      horizontal,
      noShare,
      editedAt,
      ...(onlyText ? { timeToRead, timeBelow: true, hot: false } : { publishedAt })
    };

    return (
      <PostCardItem
        onlyText={onlyText}
        display="flex"
        flexDirection="row"
        alignItems="flex-start"
        data-test={postCardItemDataTest}
        {...stepProps}
      >
        {onlyText ? null : (
          <PostCardImage
            horizontal={horizontal}
            url={articleUrl}
            previewImage={previewImage}
            altPreviewImage={altPreviewImage}
            dataTest="post-card-image-horizontal"
            background={background}
          />
        )}
        <PostCardContent
          {...horizontalProps}
        />
      </PostCardItem>
    );
  }

  return (
    <PostCardItem
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      isLarge={isLarge}
      maxWidth={{ _: isLarge ? 485 : (renderBanner ? '100%' : 327), md: isLarge ? 485 : 327 }}
      renderBanner={renderBanner}
      data-test={postCardItemDataTest}
      {...stepProps}
    >
      {!renderBanner ? (
        <>
          <PostCardImage
            isLarge={isLarge}
            url={articleUrl}
            previewImage={previewImage}
            altPreviewImage={altPreviewImage}
            background={background}
          />
          <PostCardContent
            {...props}
            isLarge={isLarge}
            timeToRead={timeToRead}
            author={author}
            publishedAt={publishedAt}
            editedAt={editedAt}
            breakpoint={breakpoint}
          />
        </>
      ) : renderBanner()}
    </PostCardItem>
  );
};

export default PostCard;
