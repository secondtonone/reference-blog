import renderer from 'react-test-renderer';
import Textarea from './textarea-field';

jest.mock('../tooltip', () => ({ children }) => <span>{children}</span>);
const testHandler = () => ({});

describe('Match snapshots Textarea', () => {
  it('empty field', () => {
    const tree = renderer.create(<Textarea placeholder="Text" value="" onChange={testHandler} scrollTooltip={false} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('with value', () => {
    const tree = renderer.create(<Textarea value="Text" onChange={testHandler} scrollTooltip={false} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('internal', () => {
    const tree = renderer.create(<Textarea value="Text" internal onChange={testHandler} scrollTooltip={false} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('with error', () => {
    const tree = renderer.create(<Textarea value="Text" onChange={testHandler} state="invalid" error="Error" scrollTooltip={false} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
