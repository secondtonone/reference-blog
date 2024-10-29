/**
 * @jest-environment jsdom
 */
import { mount } from 'enzyme';
import Textarea from './textarea-field';

describe('works Textarea field', () => {
  it('simulates change event', () => {
    const onChange = jest.fn();
    const value = 'Value';
    const component = mount(<Textarea placeholder="Field" value="" onChange={onChange} />).find('textarea');
    component.instance().value = value;
    component.simulate('change');
    expect(onChange).toHaveBeenCalled();
  });
});
