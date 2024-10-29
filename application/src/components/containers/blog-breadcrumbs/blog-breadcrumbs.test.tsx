/**
 * @jest-environment jsdom
 */

import renderer from 'react-test-renderer';
import BlogBreadcrumbs from './blog-breadcrumbs';

jest.mock('~/components/containers/svg-icon', () => ({ code }) => <span>{code}</span>);

describe('Match snapshots BlogBreadcrumbs', () => {
  it('for category', () => {
    const tree = renderer.create(
      <BlogBreadcrumbs />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('for subcategory', () => {
    const tree = renderer.create(
      <BlogBreadcrumbs
        links={[
          {
            url: '/blog/category/seo',
            name: 'SEO'
          }
        ]}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
