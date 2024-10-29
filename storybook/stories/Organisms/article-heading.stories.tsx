import ArticleHeading from '~/components/organisms/article-heading';
import fixtureSlides from '~/__fixtures__/slides';

export default {
  title: 'Organisms/article heading',
};

export const Blue = () => <ArticleHeading {...fixtureSlides[0]} />;

Blue.storyName = 'blue';

export const Purple = () => <ArticleHeading {...fixtureSlides[1]} />;

Purple.storyName = 'purple';

export const Yellow = () => <ArticleHeading {...fixtureSlides[2]} />;

Yellow.storyName = 'yellow';

export const Orange = () => <ArticleHeading {...fixtureSlides[3]} />;

Orange.storyName = 'orange';

export const Green = () => <ArticleHeading {...fixtureSlides[4]} />;

Green.storyName = 'green';
