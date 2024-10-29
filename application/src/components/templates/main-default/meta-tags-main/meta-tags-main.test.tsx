import renderer from 'react-test-renderer';
import page from '~/__fixtures__/page';
import MetaTagsMain from '.';

const Component: React.FC = ({ children }) => <>{children}</>;

jest.mock('next/head', () => ({
  __esModule: true,
  default: Component
}));

const alternates = [{ language: 'es', url: 'blog/perspectiva-digital-juegos-olimpicos-2020/', title: 'La perspectiva digital de los Juegos Ol\u00EDmpicos de 2020: cifras y hechos clave' }, { language: 'it', url: 'blog/olimpiadi-2020-prospettiva-digitale/', title: 'La prospettiva digitale delle Olimpiadi 2020: statistiche e fatti chiave' }, { language: 'pt', url: 'blog/perspectiva-digital-olimpiadas-2020/', title: 'Perspectiva Digital das Olimp\u00EDadas 2020: principais estat\u00EDsticas e fatos' }, { language: 'en', url: 'blog/olympics-2020-digital-perspective/', title: 'The Olympics 2020 Digital Perspective: Key Stats and Facts' }].map(({ language, url }) => [language, url]);

describe('meta tags main renders correctly', () => {
  it('with preview top article', () => {
    const tree = renderer.create(
      <MetaTagsMain
        currentPage={1}
        previewCard={page}
        alternates={alternates}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('with two preview big articles', () => {
    const tree = renderer.create(
      <MetaTagsMain
        currentPage={1}
        bigCards={[page, { ...page, previewImage: '/previewImage1.jpg', }]}
        alternates={alternates}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('by page 1 with invalid en domain', () => {
    const tree = renderer.create(
      <MetaTagsMain
        currentPage={1}
        alternates={alternates}
        // @ts-ignore
        canonicalSubdomain="en"
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('by page 1 with default domain', () => {
    const tree = renderer.create(
      <MetaTagsMain
        currentPage={1}
        alternates={alternates}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('by page 2 and en domain', () => {
    const tree = renderer.create(
      <MetaTagsMain
        currentPage={2}
        canonicalSubdomain="www"
        alternates={alternates}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('by page 3 and es domain', () => {
    const tree = renderer.create(
      <MetaTagsMain
        currentPage={3}
        canonicalSubdomain="es"
        alternates={alternates}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('by page 4 and de domain', () => {
    const tree = renderer.create(
      <MetaTagsMain
        currentPage={4}
        canonicalSubdomain="de"
        alternates={alternates}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('by page 5 and fr domain', () => {
    const tree = renderer.create(
      <MetaTagsMain
        currentPage={5}
        canonicalSubdomain="fr"
        alternates={alternates}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('by page 6 and it domain', () => {
    const tree = renderer.create(
      <MetaTagsMain
        currentPage={6}
        canonicalSubdomain="it"
        alternates={alternates}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('by page 7ч and pt domain', () => {
    const tree = renderer.create(
      <MetaTagsMain
        currentPage={7}
        canonicalSubdomain="pt"
        alternates={alternates}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
