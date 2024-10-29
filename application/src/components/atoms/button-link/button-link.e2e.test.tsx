import { shallow } from 'enzyme';
import ButtonLink from '.';

describe('works ButtonLink', () => {
  it('simulates click event', () => {
    const mockFn = jest.fn();
    const component = shallow(<ButtonLink href="#" onClick={mockFn}>Click</ButtonLink>);

    component.children().simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });
});
