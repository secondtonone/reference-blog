/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';

import share from '~/__fixtures__/share';
import { shareUrlGenerators } from '~/utils';

import ShareBlock from '.';

jest.mock('~/components/containers/svg-icon', () => ({ code }) => <span>{code}</span>);

describe('Match snapshots ShareBlock', () => {
  it('default', () => {
    const { asFragment } = render(
      <ShareBlock {...share} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('ShareBlock', () => {
  it('should show share block link', () => {
    const { getAllByTestId, getByTestId, getAllByRole } = render(<ShareBlock {...share} />, {});
    const keysShareUrlGenerators = Object.keys(shareUrlGenerators);

    for (const key of keysShareUrlGenerators) {
      const linkElement = getByTestId(`share-block-link-text-${key}`);
      const href = shareUrlGenerators[key]({ slug: key, ...share });
      expect(linkElement).toHaveAttribute('href', href);
      expect(linkElement).toBeInTheDocument();
    }

    expect(getAllByRole('link')).toHaveLength(Object.keys(shareUrlGenerators).length);
    expect(getAllByTestId(/share-block-link-text-/)).toHaveLength(Object.keys(shareUrlGenerators).length);
  });

  it('should show share block button', () => {
    const {
      getAllByTestId, getByTestId, getByText, getAllByRole
    } = render(<ShareBlock {...share} />);
    const keysShareUrlGenerators = Object.keys(shareUrlGenerators);

    for (const key of keysShareUrlGenerators) {
      expect(getByTestId(`button-icon-${key}`)).toBeInTheDocument();
      expect(getByText(`${key}`)).toBeInTheDocument();
    }

    expect(getAllByRole('button')).toHaveLength(keysShareUrlGenerators.length);
    expect(getAllByTestId(/button-icon-/)).toHaveLength(keysShareUrlGenerators.length);
  });
});
