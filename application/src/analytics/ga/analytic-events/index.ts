import subscriptionEvents from './subscription-events';
import paginationEvents from './pagination-events';
import articleEvents from './article-events';
import searchEvents from './search-events';
import categoryEvents from './category-events';
import bannerEvents from './banner-events';
import menuEvents from './menu-events';
import blocksEvents from './blocks-events';
import articleBannerEvents from './article-banner-events';
import pageEvents from './page-events';
import mostVisitedWebsitesEvents from './most-visited-websites-events';
import sp500Events from './sp-500-events';

const analyticEvents = [
  ...subscriptionEvents,
  ...paginationEvents,
  ...articleEvents,
  ...searchEvents,
  ...categoryEvents,
  ...bannerEvents,
  ...menuEvents,
  ...blocksEvents,
  ...articleBannerEvents,
  ...pageEvents,
  ...mostVisitedWebsitesEvents,
  ...sp500Events
] as const;

export default analyticEvents;
