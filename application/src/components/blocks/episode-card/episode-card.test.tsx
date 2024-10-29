import renderer from 'react-test-renderer';
import EpisodeCard from '.';

describe('Match snapshots EpisodeCard', () => {
  it('default', () => {
    const tree = renderer.create(<EpisodeCard
      title="SEO Analysis Drives Major Trucking Company Hiring 100s of Drivers"
      label="Episode 2"
      button="Tune-in Now"
      link="http://wwww.example.com/blog/example-seo-reality-show/"
    />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
