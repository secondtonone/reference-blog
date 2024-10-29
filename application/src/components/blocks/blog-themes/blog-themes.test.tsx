import renderer from 'react-test-renderer';
import BlogThemes from '.';

describe('Match snapshots BlogThemes', () => {
  it('empty', () => {
    const tree = renderer.create(<BlogThemes heading="Heading" categories={[]} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('filled', () => {
    const categories = [
      {
        slug: 'content',
        name: 'Content',
        lang: 'en'
      },
      {
        slug: 'ecommerce',
        name: 'eCommerce',
        lang: 'en'
      },
      {
        slug: 'seo',
        name: 'Seo',
        lang: 'en'
      },
      {
        slug: 'marketresearch',
        name: 'Market Research',
        lang: 'en'
      },
      {
        slug: 'socialmedia',
        name: 'Social Media',
        lang: 'en'
      },
      {
        slug: 'advertising',
        name: 'Advertising',
        lang: 'en'
      },
      {
        slug: 'discoverexample',
        name: 'Discover example',
        lang: 'en'
      }
    ];

    const tree = renderer.create(<BlogThemes heading="Heading" categories={categories} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
