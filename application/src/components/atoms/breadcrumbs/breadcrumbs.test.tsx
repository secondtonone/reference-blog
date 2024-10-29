import renderer from 'react-test-renderer';
import Breadcrumbs from '.';

describe('Match snapshots Breadcrumbs', () => {
  it('empty', () => {
    const tree = renderer.create(<Breadcrumbs />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('with seo page link', () => {
    const tree = renderer
      .create(
        <Breadcrumbs links={
          [
            {
              url: '/',
              name: 'Main page /'
            },
            {
              url: 'seo/',
              name: 'Seo'
            }
          ]
        }
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('with links', () => {
    const tree = renderer
      .create(
        <Breadcrumbs links={
            [
              {
                url: '/',
                name: 'Main page /'
              },
              {
                url: 'seo/',
                name: 'Seo'
              },
              {
                url: 'link/',
                name: 'Link'
              }
            ]
          }
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('with empty url /', () => {
    const tree = renderer
      .create(
        <Breadcrumbs links={
            [
              {
                url: '/',
                name: 'Main page /'
              },
              {
                url: 'seo',
                name: 'Seo'
              },
              {
                url: 'link',
                name: 'Link'
              }
            ]
          }
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
