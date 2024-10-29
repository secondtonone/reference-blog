import renderer from 'react-test-renderer';
import Summary from '.';
import data from '~/__fixtures__/article-summary-data';
import articleSummary from '~/constants/article-summary';
import LinkText from '~/components/atoms/link-text';

describe('Match snapshots Summary', () => {
  it('default', () => {
    const tree = renderer.create(
      <Summary
        title="Article metrics"
        summaries={data.reduce((acc, { name, value }) => {
          if (articleSummary[name] && value > 0) acc.push({ ...articleSummary[name], value });
          return acc;
        }, [])}
        footer={(
          <>
            Data from
            {' '}
            <LinkText href="https://www.example.com/analytics/backlinks/" target="_blank">Backlink Analytics</LinkText>
            .
          </>
        )}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
