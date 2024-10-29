import renderer from 'react-test-renderer';
import Backdrop from '.';

describe('Match snapshots Backdrop', () => {
  it('default', () => {
    const tree = renderer.create(
      <Backdrop>
        Backdrop
      </Backdrop>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('shifted', () => {
    const tree = renderer.create(
      <Backdrop top={130}>
        Backdrop
      </Backdrop>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
