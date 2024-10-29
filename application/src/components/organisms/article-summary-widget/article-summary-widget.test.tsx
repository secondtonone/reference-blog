import renderer from 'react-test-renderer';
import ArticleSummary from '.';
import data from '~/__fixtures__/article-summary-data';

describe('Match snapshots ArticleSummary', () => {
  it('default', () => {
    const tree = renderer.create(
      <ArticleSummary
        metrics={data}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
