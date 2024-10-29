import renderer from 'react-test-renderer';
import Banner from '.';

describe('Match snapshots BannerWide', () => {
  it('default', () => {
    const tree = renderer.create(
      <Banner.Wide />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('with label', () => {
    const tree = renderer.create(
      <Banner.Wide>
        <Banner.Label />
      </Banner.Wide>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('with label and children', () => {
    const tree = renderer.create(
      <Banner.Wide>
        <Banner.Label />
        <div className="test" />
      </Banner.Wide>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
