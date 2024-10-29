/**
 * @jest-environment jsdom
 */
import { render } from '@testing-library/react';
import PageSection from '.';

describe('Match snapshot PageSection', () => {
  it('empty', () => {
    const { asFragment } = render(<PageSection />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('with children', () => {
    const { asFragment } = render(<PageSection><div className="test" /></PageSection>);

    expect(asFragment()).toMatchSnapshot();
  });
});
