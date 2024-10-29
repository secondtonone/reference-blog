import renderer from 'react-test-renderer';
import Image from './image';

const src = 'https://static.example.com/semblog-next-static/banners/newsletter.png';

describe('Match snapshots Image', () => {
  it('default', () => {
    const tree = renderer.create(<Image alt="Picture" className="test" data-test="picture" src={src} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('with sizes', () => {
    const tree = renderer.create(<Image alt="Picture" height="320" width="300" data-test="picture" src={src} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('with lazy loading', () => {
    const tree = renderer.create(<Image isLazy className="test" alt="Picture" data-test="picture" src={src} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('with loading lazy', () => {
    const tree = renderer.create(<Image isLazy className="test" alt="Picture" data-test="picture" src={src} loading="lazy" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('with loading eager', () => {
    const tree = renderer.create(<Image isLazy className="test" alt="Picture" data-test="picture" src={src} loading="eager" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
