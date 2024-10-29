/**
 * @jest-environment jsdom
 */
import { render } from '@testing-library/react';
import EpisodeWidget from '.';

describe('Match snapshots EbookWidget', () => {
  it('default', () => {
    const { asFragment } = render(
      <EpisodeWidget id="5768" />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
