/**
 * @jest-environment jsdom
 */
import { mount } from 'enzyme';
import InputField from './input-field';

describe('works Input field', () => {
  it('simulates change event', () => {
    const onChange = jest.fn();
    const value = 'Value';
    const component = mount(<InputField placeholder="Field" value="" onChange={onChange} />).find('input');
    component.instance().value = value;
    component.simulate('change');
    expect(onChange).toHaveBeenCalled();
  });
});
