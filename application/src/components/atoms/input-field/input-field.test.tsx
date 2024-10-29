import renderer from 'react-test-renderer';
import InputField from './input-field';

jest.mock('../tooltip', () => ({ children }) => <span>{children}</span>);
const testHandler = () => ({});

describe('Match snapshots InputField', () => {
  it('empty field', () => {
    const tree = renderer.create(<InputField placeholder="Field" value="" onChange={testHandler} scrollTooltip={false} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('with value', () => {
    const tree = renderer.create(<InputField value="Value" onChange={testHandler} scrollTooltip={false} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('internal', () => {
    const tree = renderer.create(<InputField value="Value" internal onChange={testHandler} scrollTooltip={false} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('with error', () => {
    const tree = renderer.create(<InputField value="Value" onChange={testHandler} state="invalid" error="Error" scrollTooltip={false} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
