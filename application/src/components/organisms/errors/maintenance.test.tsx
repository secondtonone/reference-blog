import renderer from 'react-test-renderer';
import Maintenance from './maintenance';

jest.mock('~/components/containers/svg-icon', () => ({ code }) => <span>{code}</span>);

describe('Match snapshots Maintenance', () => {
  it('default', () => {
    const tree = renderer.create(
      <Maintenance />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
