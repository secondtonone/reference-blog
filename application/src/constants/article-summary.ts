import { IllustGroupTokens } from '~/styles/palette';
import { ArticleMetric } from '~/view-model/article-metrics.view-model';

const articleSummary: Record<ArticleMetric, {
    title: string;
    color: keyof IllustGroupTokens;
    description: string;
  }> = {
    referringDomains: {
      title: 'Referring Domains',
      description: 'The total number of referring domains that have at least one link pointing to an analyzed domain/URL. Only referring domains that we have seen in the last few months are taken into account.',
      color: 'purpleIllust'
    },
    backlinks: {
      title: 'Backlinks',
      description: 'The total number of backlinks leading to an analyzed domain/URL. Only backlinks that we have seen in the last few months are taken into account.',
      color: 'blueIllust'
    }
  };

export default articleSummary;
