import renderer from 'react-test-renderer';
import CarouselScroll from '.';

describe('Match snapshots CarouselScroll', () => {
  it('default', () => {
    const tree = renderer.create(<CarouselScroll />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
