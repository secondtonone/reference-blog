import renderer from 'react-test-renderer';
import PostCard from './post-card';
import fixtureArticles from '../../../__fixtures__/articles';

jest.mock('~/components/containers/svg-icon', () => ({ code }) => <span>{code}</span>);

describe('Post card works', () => {
  it('vertical with image', () => {
    const content = fixtureArticles[0];

    const tree = renderer.create(<PostCard {...content} />);

    expect(tree).toMatchSnapshot();
  });
});
