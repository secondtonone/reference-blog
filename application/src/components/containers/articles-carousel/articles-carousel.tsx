import styled from 'styled-components';
import { ArticlePreview } from '~/components/organisms';
import { ArticleViewModel, BreakpointViewModel } from '~/view-model';

interface Props {
  slides: ArticleViewModel[],
  count?: number
  breakpoint: BreakpointViewModel
}

const Carousel = styled.div<{ dots?: boolean }>``;

const ArticlesCarousel: React.FC<Props> = ({
  slides,
  count = 5,
  breakpoint
}) => (
  slides?.length > 0 && (
    <Carousel dots>
      {
        slides
          .slice(0, count)
          .map(slide => (
            <ArticlePreview
              breakpoint={breakpoint}
              key={`slide-${slide.id}`}
              {...slide}
            />
          ))
      }
    </Carousel>
  )
);

export default ArticlesCarousel;
