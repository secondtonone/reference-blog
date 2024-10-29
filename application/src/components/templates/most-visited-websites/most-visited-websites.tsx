import dynamic from 'next/dynamic';

import { PageViewModel } from '~/view-model';

const PageWrap = dynamic(import('~/components/templates/most-visited-websites/blocks/page-wrap'));
const TopBlock = dynamic(import('~/components/templates/most-visited-websites/blocks/top-block'));
const RankBlock = dynamic(import('~/components/templates/most-visited-websites/blocks/rank-block'));
const TAWidget = dynamic(import('~/components/templates/most-visited-websites/blocks/ta-widget'));
const IndustryBlock = dynamic(import('~/components/templates/most-visited-websites/blocks/industry-block'));
const MEWidget = dynamic(import('~/components/templates/most-visited-websites/blocks/me-widget'));

const MostVisitedWebsites = ({ page }: { page: PageViewModel }) => (
  <PageWrap>
    <TopBlock />
    <RankBlock page={page} />
    <TAWidget />
    <IndustryBlock />
    <MEWidget />
  </PageWrap>
);

export default MostVisitedWebsites;
