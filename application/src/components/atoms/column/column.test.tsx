import renderer from 'react-test-renderer';
import Column from '.';

describe('Match snapshots Column', () => {
  it('default', () => {
    const tree = renderer.create(<Column />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('1', () => {
    const tree = renderer.create(<Column width={1} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('1/2', () => {
    const tree = renderer.create(<Column width={1 / 2} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('1/3', () => {
    const tree = renderer.create(<Column width={1 / 3} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('1/4', () => {
    const tree = renderer.create(<Column width={1 / 4} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('1/5', () => {
    const tree = renderer.create(<Column width={1 / 5} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('1/6', () => {
    const tree = renderer.create(<Column width={1 / 6} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
