import { shallow } from 'enzyme';
import Hint from '.';

describe('works Hint', () => {
  it('default hint', () => {
    const component = shallow(<Hint>hint</Hint>);

    expect(component.text()).toEqual('hint');
  });
});
