import articleSummaryData from '~/__fixtures__/article-summary-data';
import ArticleSummary from '~/components/organisms/article-summary-widget';

export default {
  title: 'Organisms/article summary widget',
};

export const Default = () => <ArticleSummary metrics={articleSummaryData} />;

Default.storyName = 'default';
