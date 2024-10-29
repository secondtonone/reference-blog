/**
 * @jest-environment jsdom
 */
import { render } from '@testing-library/react';
import EbookWidget from '.';

import fixtureEbook from '~/__fixtures__/ebook';

describe('Match snapshots EbookWidget', () => {
  it('default', () => {
    const { asFragment } = render(
      <EbookWidget {...fixtureEbook} />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
