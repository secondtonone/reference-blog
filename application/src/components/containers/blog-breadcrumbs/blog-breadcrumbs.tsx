import Breadcrumbs, { BreadcrumbsProps } from '~/components/atoms/breadcrumbs';

const defaultLinks: BreadcrumbsProps['links'] = [{
  url: '/blog/',
  name: 'Main page /'
}];

const BlogBreadcrumbs: React.FC<BreadcrumbsProps> = ({ hideMain, links = [], ...props }) => (
  <Breadcrumbs
    {...props}
    links={!hideMain ? [...defaultLinks, ...links] : links}
  />
);

export default BlogBreadcrumbs;
