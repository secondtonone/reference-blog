import { ArticlePreview } from '~/components/organisms';
import fixtureSlides from '~/__fixtures__/slides';

const breakpoint = { isPhone: false, isTablet: false, isDesktop: true };

export default {
  title: 'Organisms/article preview',
};

export const Blue = () => <ArticlePreview breakpoint={breakpoint} {...fixtureSlides[0]} />;

Blue.storyName = 'blue';

export const Purple = () => <ArticlePreview breakpoint={breakpoint} {...fixtureSlides[1]} />;

Purple.storyName = 'purple';

export const Yellow = () => <ArticlePreview breakpoint={breakpoint} {...fixtureSlides[2]} />;

Yellow.storyName = 'yellow';

export const Orange = () => <ArticlePreview breakpoint={breakpoint} {...fixtureSlides[3]} />;

Orange.storyName = 'orange';

export const Green = () => <ArticlePreview breakpoint={breakpoint} {...fixtureSlides[4]} />;

Green.storyName = 'green';

export const WithPreview = () => (
  <ArticlePreview breakpoint={breakpoint} withPreview {...fixtureSlides[3]} />
);

WithPreview.storyName = 'with preview';

export const HorizontalLayout = () => (
  <ArticlePreview breakpoint={breakpoint} withPreview isHorizontal {...fixtureSlides[2]} />
);

HorizontalLayout.storyName = 'horizontal layout';

export const InCard = () => (
  <ArticlePreview breakpoint={breakpoint} withPreview isHorizontal card {...fixtureSlides[1]} />
);

InCard.storyName = 'in card';
