import renderer from 'react-test-renderer';
import Banner from '.';

describe('Match snapshots BannerColumn', () => {
  it('default', () => {
    const tree = renderer.create(
      <Banner.Column />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('with label', () => {
    const tree = renderer.create(
      <Banner.Column>
        <Banner.Label />
      </Banner.Column>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('with label and children', () => {
    const tree = renderer.create(
      <Banner.Column>
        <Banner.Label />
        <div className="test" />
      </Banner.Column>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
