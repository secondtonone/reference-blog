import { shallow } from 'enzyme';
import CarouselDots from '.';

describe('works CarouselDots', () => {
  it('renders correctly', () => {
    const component = shallow(<CarouselDots />);

    expect(component).toBeTruthy();
  });
  it('takes className', () => {
    const component = shallow(<CarouselDots className="some" />);

    expect(component.prop('className')).toBe('some');
  });
});
