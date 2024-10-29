import renderer from 'react-test-renderer';
import TopicLink from '.';

describe('Match snapshots TopicLink', () => {
  it('default', () => {
    const tree = renderer.create(<TopicLink href="link">text</TopicLink>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
