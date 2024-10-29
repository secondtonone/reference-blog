import dynamic from 'next/dynamic';

const PageWrap = dynamic(import('~/components/templates/blog-top-domains/blocks/page-wrap'));

const TopBlock = dynamic(import('~/components/templates/blog-top-domains/blocks/top-block'));

const DomainBlock = dynamic(import('~/components/templates/blog-top-domains/blocks/domain-block'));

const TAWidget = dynamic(import('~/components/templates/blog-top-domains/blocks/ta-widget'));

const BlogTopDomains = () => (
  <PageWrap>
    <TopBlock />
    <DomainBlock />
    <TAWidget />
  </PageWrap>
);

export default BlogTopDomains;
