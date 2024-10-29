import { shallow } from 'enzyme';
import LinkText from '.';

describe('works LinkText', () => {
  it('visited link', () => {
    const mockFn = jest.fn();

    const component = shallow(<LinkText href="#" onClick={mockFn}>link</LinkText>);

    component.simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });
});
