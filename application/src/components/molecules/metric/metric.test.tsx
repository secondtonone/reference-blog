import renderer from 'react-test-renderer';
import Metric from '.';

describe('Match snapshot Metric', () => {
  it('default', () => {
    const tree = renderer.create(<Metric
      value={999}
      title="Default Metric"
      description="Default Metric is a default metric of..."
    />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('with color', () => {
    const tree = renderer.create(<Metric
      value={99}
      title="Another Metric"
      description="Another Metric is a another metric of..."
      color="blueIllust"
    />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
