import renderer from 'react-test-renderer';
import page from '~/__fixtures__/page';
import MetaTagsArticle from '.';

const Component: React.FC = ({ children }) => <>{children}</>;

export default jest.mock('next/head', () => ({
  __esModule: true,
  default: Component
}));

describe('article meta tags renders correctly', () => {
  it('by page with default en domain', () => {
    const tree = renderer.create(
      <MetaTagsArticle page={page} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('by page and en domain', () => {
    const tree = renderer.create(
      <MetaTagsArticle page={page} canonicalSubdomain="www" />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('by page and es domain', () => {
    const tree = renderer.create(
      <MetaTagsArticle page={page} canonicalSubdomain="es" />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('by page and de domain', () => {
    const tree = renderer.create(
      <MetaTagsArticle page={page} canonicalSubdomain="de" />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('by page and fr domain', () => {
    const tree = renderer.create(
      <MetaTagsArticle page={page} canonicalSubdomain="fr" />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('by page and it domain', () => {
    const tree = renderer.create(
      <MetaTagsArticle page={page} canonicalSubdomain="it" />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('by page and pt domain', () => {
    const tree = renderer.create(
      <MetaTagsArticle page={page} canonicalSubdomain="pt" />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
