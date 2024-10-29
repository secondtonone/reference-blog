import renderer from 'react-test-renderer';
import Banner from '.';

describe('Match snapshots BannerLabel', () => {
  it('default', () => {
    const tree = renderer.create(
      <Banner.Label />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('with custom text', () => {
    const tree = renderer.create(
      <Banner.Label text="test" />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
