export type ArticleMetric = 'backlinks' | 'referringDomains';

type ArticleMetrics = {
  name: ArticleMetric
  value: number
}[];

export default ArticleMetrics;
