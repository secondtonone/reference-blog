/**
 * @jest-environment jsdom
 */
import { mount } from 'enzyme';
import ButtonIcon from '.';

jest.mock('~/components/containers/svg-icon', () => jest.fn().mockReturnValue('svg-icon'));

describe('works ButtonIcon', () => {
  it('simulates click event', () => {
    const mockFn = jest.fn();
    const component = mount(<ButtonIcon code="close" onClick={mockFn} />).find('button');
    component.simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });
});
