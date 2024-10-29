import { useMemo } from 'react';
import articleSummary from '~/constants/article-summary';
import Summary from '~/components/containers/summary';
import LinkText from '~/components/atoms/link-text';
import IntersectionContainer from '~/components/containers/intersection-container';

import ArticleMetrics from '~/view-model/article-metrics.view-model';
import { sendAnalyticEvent } from '~/analytics';

const analyticsHandler = () => {
  sendAnalyticEvent('article-metrics-shown');
};

const analyticsClickHandler = () => {
  sendAnalyticEvent('article-metrics-click');
};

interface ArticleSummaryProps {
  metrics: ArticleMetrics
}

const ArticleSummary: React.FC<ArticleSummaryProps> = ({ metrics = [] }) => {
  const summaries = useMemo(() => metrics
    .filter(({ name, value }) => articleSummary[name] && value > 0)
    .map(({ name, value }) => ({ ...articleSummary[name], value })),
  [metrics]);

  return (
    <IntersectionContainer
      mt={22}
      height="100%"
      width="100%"
      maxWidth={194}
      display={{ _: 'none', lg: 'block' }}
      once
      onIntersection={analyticsHandler}
    >
      <Summary
        title="Article metrics"
        summaries={summaries}
        footer={(
          <>
            Data from
            {' '}
            <LinkText href="https://www.example.com/analytics/backlinks/" target="_blank" onClick={analyticsClickHandler}>Backlink Analytics</LinkText>
            .
          </>
        )}
      />
    </IntersectionContainer>
  );
};

export default ArticleSummary;
