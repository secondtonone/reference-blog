/**
 * @jest-environment jsdom
 */

import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';

import resources from '~/__fixtures__/socials';

import SocialBlock from '.';

jest.mock('~/components/containers/svg-icon', () => ({ code }) => <span>{code}</span>);

resources.instagram = 'https://www.instagram/example/';
resources.twitter = '@example/';

describe('Match snapshot SocialBlock', () => {
  it('match snapshot default', () => {
    const tree = renderer.create(<SocialBlock resources={resources} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('match snapshot with inBlock', () => {
    const tree = renderer.create(<SocialBlock resources={resources} inBlock />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('SocialBlock', () => {
  it('should show link-text', async () => {
    const { getAllByTestId } = render(<SocialBlock resources={resources} inBlock />);
    const linkElements = getAllByTestId('link-text');
    const keysResources = Object.keys(resources);
    expect(linkElements).toHaveLength(keysResources.length);

    // eslint-disable-next-line no-restricted-syntax
    for (const linkElement of linkElements) {
      expect(linkElement).toHaveAttribute('href');
    }
  });

  it('should show button with icon', async () => {
    const {
      getAllByTestId,
      getAllByRole,
      getByText,
      getByTestId,
      getByLabelText
    } = render(<SocialBlock resources={resources} inBlock />);
    const keysResources = Object.keys(resources);

    // eslint-disable-next-line no-restricted-syntax
    for (const key of keysResources) {
      expect(getByTestId(`button-icon-${key}`)).toBeInTheDocument();
      expect(getByText(key)).toBeInTheDocument();
      expect(getByLabelText(key)).toBeInTheDocument();
    }

    expect(getAllByTestId(/button-icon-/)).toHaveLength(keysResources.length);
    expect(getAllByRole('button')).toHaveLength(keysResources.length);
  });
});
