import { GroupedCategory } from '~/components/templates/grouped-category';
import { Container } from '~/components/atoms';
import BlogBreadcrumbs from '~/components/containers/blog-breadcrumbs';

import fixtureArticles from '~/__fixtures__/articles';
import fixtureCategories from '~/__fixtures__/categories';

export default {
  title: 'Templates/Grouped category',
};

export const Default = () => {
  const pageProps = {
    categoryFields: {
      ...fixtureCategories[0],
      slug: 'grouped-category',
      name: 'Grouped category',
      description:
        'The latest search industry news and major events happening in SEO - including Google updates and announcements. You can also find our unique data studies content, case studies and a few search-related quizzes and games.',
    },
    groups: [
      {
        name: 'First group',
        articles: [fixtureArticles[0], fixtureArticles[1]],
      },
      {
        name: 'Second group',
        articles: [fixtureArticles[2], fixtureArticles[3]],
      },
    ],
    breakpoint: { isPhone: false, isTablet: false, isDesktop: true },
  };

  return (
    <>
      <Container>
        <BlogBreadcrumbs
          muted
          links={[
            {
              url: '/blog/category/news',
              name: 'News',
            },
          ]}
        />
      </Container>
      <GroupedCategory {...pageProps} />
    </>
  );
};

Default.storyName = 'default';
