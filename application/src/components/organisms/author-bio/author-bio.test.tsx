/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import fixtureAuthors from '~/__fixtures__/authors';

import AuthorBio from '.';

jest.mock('~/components/containers/svg-icon', () => ({ code }) => <span>{code}</span>);

describe('Match snapshots AuthorBio', () => {
  it('default', () => {
    const tree = renderer.create(
      <AuthorBio
        {...fixtureAuthors[0]}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('in block', () => {
    const tree = renderer.create(
      <AuthorBio
        {...fixtureAuthors[1]}
        inBlock
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('with empty avatar', () => {
    const data = { ...fixtureAuthors[0] };

    data.photo = '';

    const tree = renderer.create(
      <AuthorBio
        {...data}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('AuthorBio', () => {
  it('should show author-socials', () => {
    const data = { ...fixtureAuthors[1] };
    const { getByTestId } = render(<AuthorBio {...data} inBlock />);
    expect(getByTestId('author-socials')).toBeInTheDocument();
  });
});
