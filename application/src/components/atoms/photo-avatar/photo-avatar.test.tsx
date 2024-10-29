import renderer from 'react-test-renderer';
import fixtureAuthors from '~/__fixtures__/authors';
import PhotoAvatar from '.';

const { photo } = fixtureAuthors[0];

describe('Match snapshot PhotoAvatar', () => {
  it('default', () => {
    const tree = renderer.create(<PhotoAvatar photo={photo} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('scaled', () => {
    const tree = renderer.create(<PhotoAvatar photo={photo} scale={0.5} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('in star', () => {
    const tree = renderer.create(<PhotoAvatar photo={photo} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('in circle', () => {
    const tree = renderer.create(<PhotoAvatar photo={photo} photoMask="circle" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('in blob', () => {
    const tree = renderer.create(<PhotoAvatar photo={photo} photoMask="blob" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('in flower', () => {
    const tree = renderer.create(<PhotoAvatar photo={photo} photoMask="flower" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('in radiation', () => {
    const tree = renderer.create(<PhotoAvatar photo={photo} photoMask="radiation" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('in clockwise', () => {
    const tree = renderer.create(<PhotoAvatar photo={photo} photoMask="clockwise" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('in rise', () => {
    const tree = renderer.create(<PhotoAvatar photo={photo} photoMask="rise" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
