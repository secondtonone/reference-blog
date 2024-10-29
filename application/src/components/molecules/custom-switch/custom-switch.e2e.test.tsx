/**
 * @jest-environment jsdom
 */
import { mount } from 'enzyme';
import CustomSwitch from '.';

describe('works Input field', () => {
  it('simulates change event', () => {
    const onChange = jest.fn();
    const component = mount(<CustomSwitch checked={false} onChange={onChange} />).find('input');
    component.instance().checked = true;
    component.simulate('change');
    expect(onChange).toHaveBeenCalled();
  });
});
