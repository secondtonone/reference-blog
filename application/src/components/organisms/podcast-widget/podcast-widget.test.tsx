import renderer from 'react-test-renderer';
import PodcastWidget from '.';

import fixturePodcast from '~/__fixtures__/podcast';

describe('Match snapshots PodcastWidget', () => {
  it('default', () => {
    const tree = renderer.create(
      <PodcastWidget {...fixturePodcast} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
