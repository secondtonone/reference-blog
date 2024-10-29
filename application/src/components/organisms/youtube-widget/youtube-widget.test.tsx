import renderer from 'react-test-renderer';
import YoutubeWidget from '.';

import data from '~/__fixtures__/youtube';

describe('Match snapshots YoutubeWidget', () => {
  it('default', () => {
    const tree = renderer.create(
      <YoutubeWidget {...data} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
