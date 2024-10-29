import Category from '~/components/templates/category/child';
import { Container } from '~/components/atoms';
import BlogBreadcrumbs from '~/components/containers/blog-breadcrumbs';

import fixtureArticles from '~/__fixtures__/articles';
import fixtureCategories from '~/__fixtures__/categories';

export default {
  title: 'Templates/Subcategory',
};

export const Default = () => {
  const pageProps = {
    categoryFields: {
      ...fixtureCategories[1],
      parent: {
        ...fixtureCategories[0],
        children: [fixtureCategories[2], fixtureCategories[3]],
      },
    },
    articlesTop: fixtureArticles.slice(0, 4),
    articles: fixtureArticles,
    breakpoint: { isPhone: false, isTablet: false, isDesktop: true },
    subcategory: fixtureCategories[1].slug,
  };

  return (
    <>
      <Container>
        <BlogBreadcrumbs
          muted
          links={[
            {
              url: `/blog/category/${pageProps.categoryFields.slug}`,
              name: pageProps.categoryFields?.parent.name,
            },
          ]}
        />
      </Container>
      <Category {...pageProps} />
    </>
  );
};

Default.storyName = 'default';
