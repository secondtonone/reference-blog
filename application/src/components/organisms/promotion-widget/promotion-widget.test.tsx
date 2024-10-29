/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';

import PromotionWidget from '.';

import promotedMaterial from '~/constants/promoted-material';

describe('Match snapshots PromotionWidget', () => {
  it('default', () => {
    const { asFragment } = render(<PromotionWidget {...promotedMaterial[0]} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
