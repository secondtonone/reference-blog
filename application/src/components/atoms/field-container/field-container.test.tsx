import renderer from 'react-test-renderer';
import FieldContainer from './field-container';

jest.mock('../tooltip', () => ({ children, error }) => (
  <span>
    {error && <span>{error}</span>}
    {children}
  </span>
));

describe('Match snapshots Field Container', () => {
  it('internal', () => {
    const tree = renderer.create(<FieldContainer
      internal
      field={() => (
        <div className="SOutline">
          <input />
        </div>
      )}
    />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('with error', () => {
    const tree = renderer.create(<FieldContainer
      error="Error"
      field={() => (
        <div className="SOutline">
          <input />
        </div>
      )}
    />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
