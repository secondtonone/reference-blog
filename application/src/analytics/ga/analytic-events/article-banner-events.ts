const articleBannerEvents = [
  {
    name: 'article-banner-url-click',
    category: 'Blog_revenue',
    action: 'destination_url_click'
  },
  {
    name: 'article-banner-campaign',
    category: 'Blog_revenue',
    action: 'create_campaign_siteaudit'
  },
  {
    name: 'article-banner-cta-shown',
    category: 'Blog_revenue',
    action: 'cta-show'
  },
  {
    name: 'article-banner-cta-click',
    category: 'Blog_revenue',
    action: 'cta-click'
  },
  {
    name: 'article-authority-score-to-check',
    category: 'Blog_revenue',
    action: 'freetool-click',
    label: 'authority-score_click-to-check'
  },
  {
    name: 'article-authority-score-to-product',
    category: 'Blog_revenue',
    action: 'freetool-click',
    label: 'authority-score_go-to-product'
  },
  {
    name: 'article-site-audit-start-free',
    category: 'Blog_revenue',
    action: 'freetool-click',
    label: 'site-audit_start-free'
  },
  {
    name: 'article-site-audit-start-full',
    category: 'Blog_revenue',
    action: 'freetool-click',
    label: 'site-audit_start-full'
  },
  {
    name: 'article-episode-shown',
    category: 'Blog',
    action: 'episode-show'
  },
  {
    name: 'article-episode-click',
    category: 'Blog',
    action: 'episode-click'
  }
] as const;

export default articleBannerEvents;
