/**
 * @jest-environment jsdom
 */
import { render } from '@testing-library/react';
import page from '~/__fixtures__/page';
import PageContext from '~/contexts/page-context';
import LegalText from '.';

describe('Match snapshots LegalText', () => {
  it('default', () => {
    const { asFragment } = render(
      <PageContext.Provider value={{ page: { ...page, url: 'blog/sp-500' } }}>
        <LegalText />
      </PageContext.Provider>, {}
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
