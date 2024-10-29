/**
 * @jest-environment jsdom
 */
import { render } from '@testing-library/react';
import BoxAdaptive from '.';

describe('Match snapshots BoxAdaptive', () => {
  it('default', () => {
    const { asFragment } = render(<BoxAdaptive />, {});
    expect(asFragment()).toMatchSnapshot();
  });
  it('with children', () => {
    const { asFragment } = render((
      <BoxAdaptive>
        <div className="children" />
      </BoxAdaptive>
    ), {});
    expect(asFragment()).toMatchSnapshot();
  });
});
