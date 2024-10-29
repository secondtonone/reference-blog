import articles from '~/__fixtures__/articles';
import Banner from '~/components/containers/banner';
import ArticlesList from '~/components/containers/articles-list';

export default {
  title: 'Containers/ArticlesList',
};

export const WithLarge = () => (
  <ArticlesList
    articles={articles}
    breakpoint={{ isPhone: false, isTablet: false, isDesktop: true }}
  />
);

WithLarge.storyName = 'with large';

export const WithSmall = () => (
  <ArticlesList
    articles={articles.slice(0, 3)}
    largeCount={0}
    breakpoint={{ isPhone: false, isTablet: false, isDesktop: true }}
  />
);

WithSmall.storyName = 'with small';

export const WithBannerLarge = () => (
  <ArticlesList
    articles={articles}
    breakpoint={{ isPhone: false, isTablet: false, isDesktop: true }}
    renderBanner={() => (
      <Banner.Column>
        <Banner.Label />
      </Banner.Column>
    )}
  />
);

WithBannerLarge.storyName = 'with banner:large';

export const WithBannerSmall = () => (
  <ArticlesList
    articles={articles.slice(0, 3)}
    largeCount={0}
    breakpoint={{ isPhone: false, isTablet: false, isDesktop: true }}
    renderBanner={() => (
      <Banner.Column>
        <Banner.Label />
      </Banner.Column>
    )}
  />
);

WithBannerSmall.storyName = 'with banner:small';
