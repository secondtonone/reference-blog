import renderer from 'react-test-renderer';
import CarouselDots from '.';

describe('Match snapshots CarouselDots', () => {
  it('default', () => {
    const tree = renderer.create(<CarouselDots />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('with className', () => {
    const tree = renderer.create(<CarouselDots className="some" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
