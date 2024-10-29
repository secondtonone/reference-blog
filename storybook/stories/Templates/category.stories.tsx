import Category from '~/components/templates/category/parent';
import { Container } from '~/components/atoms';
import BlogBreadcrumbs from '~/components/containers/blog-breadcrumbs';

import fixtureArticles from '~/__fixtures__/articles';
import fixtureCategories from '~/__fixtures__/categories';
import fixturePodcast from '~/__fixtures__/podcast';

export default {
  title: 'Templates/Category',
};

export const Default = () => {
  const pageProps = {
    categoryFields: {
      ...fixtureCategories[0],
      children: [fixtureCategories[1], fixtureCategories[2]],
    },
    articlesTop: fixtureArticles.slice(0, 4),
    articles: fixtureArticles,
    breakpoint: { isPhone: false, isTablet: false, isDesktop: true },
    podcast: fixturePodcast,
  };

  return (
    <>
      <Container>
        <BlogBreadcrumbs muted />
      </Container>
      <Category {...pageProps} />
    </>
  );
};

Default.storyName = 'default';
