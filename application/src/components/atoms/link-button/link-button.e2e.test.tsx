import { shallow } from 'enzyme';
import LinkButton from '.';

describe('works LinkButton', () => {
  it('click link', () => {
    const mockFn = jest.fn();

    const component = shallow(<LinkButton onClick={mockFn}>link like button</LinkButton>);

    component.children().simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });
});
