import { MainDefault } from '~/components/templates/main-default';
import fixtureArticles from '~/__fixtures__/articles';
import fixtureSlides from '~/__fixtures__/slides';
import fixturePodcast from '~/__fixtures__/podcast';
import fixtureEbook from '~/__fixtures__/ebook';

export default {
  title: 'Templates/Main',
};

export const Default = () => {
  const pageProps = {
    page: null,
    slides: fixtureSlides,
    articles: fixtureArticles,
    editors: fixtureArticles,
    seo: fixtureArticles,
    advertising: fixtureArticles,
    podcast: fixturePodcast,
    ebook: fixtureEbook,
    breakpoint: { isPhone: false, isTablet: false, isDesktop: true },
  };

  return <MainDefault {...pageProps} />;
};

Default.storyName = 'default';
