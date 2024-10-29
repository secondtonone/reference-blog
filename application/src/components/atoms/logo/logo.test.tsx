import renderer from 'react-test-renderer';
import Logo from '.';

jest.mock('~/components/containers/svg-icon', () => ({ code }) => <span>{code}</span>);

describe('Match snapshot Logo', () => {
  it('default', () => {
    const tree = renderer.create(<Logo />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
