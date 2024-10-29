/**
 * @jest-environment jsdom
 */
import { render } from '@testing-library/react';
import PopupLayout from '.';

jest.mock('~/components/containers/svg-icon', () => jest.fn().mockReturnValue('svg-icon'));

describe('Match snapshots PopupLayout', () => {
  it('without context provider', () => {
    const { asFragment } = render(
      <PopupLayout code="SUBSCRIBE" />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
