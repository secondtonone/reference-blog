import { shallow } from 'enzyme';
import Button from '.';

describe('works Button', () => {
  it('simulates click event', () => {
    const mockFn = jest.fn();
    const component = shallow(<Button onClick={mockFn}>Click</Button>);

    component.children().simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });
});
