import { MainCategory } from '~/components/templates/main-category';
import { Container } from '~/components/atoms';
import BlogBreadcrumbs from '~/components/containers/blog-breadcrumbs';

import fixtureCategories from '~/__fixtures__/categories';
import fixtureSubcategories from '~/__fixtures__/subcategories';

export default {
  title: 'Templates/Main category',
};

export const Default = () => {
  const pageProps = {
    categoryFields: {
      ...fixtureCategories[0],
      name: 'SEO',
      description: 'The latest search industry news and major events happening in SEO - including Google updates and announcements. You can also find our unique data studies content, case studies and a few search-related quizzes and games.'
    },
    groups: fixtureSubcategories,
    breakpoint: { isPhone: false, isTablet: false, isDesktop: true },
  };

  return (
    <>
      <Container>
        <BlogBreadcrumbs
          muted
        />
      </Container>
      <MainCategory
        {...pageProps}
      />
    </>
  );
};

Default.storyName = 'default';
