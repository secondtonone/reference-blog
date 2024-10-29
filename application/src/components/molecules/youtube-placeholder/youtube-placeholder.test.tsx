import renderer from 'react-test-renderer';
import YoutubePlaceholder from '.';

jest.mock('~/components/containers/svg-icon', () => ({ code }) => <span>{code}</span>);

describe('Match snapshots PostCardContent', () => {
  it('default', () => {
    const tree = renderer.create(
      <YoutubePlaceholder src="https://www.youtube.com/embed/-tbD9c-feMU" />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
