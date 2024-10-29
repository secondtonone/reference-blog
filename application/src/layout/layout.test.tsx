/**
 * @jest-environment jsdom
 */
import { render, fireEvent } from '@testing-library/react';
import Layout from '~/layout/layout';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      asPath: '/blog/'
    };
  },
}));

describe('layout works correctly', () => {
  it('user load', () => {
    const { asFragment } = render(<Layout isBot={false} isUser />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('user load scroll fixed header', () => {
    const { asFragment, getByTestId } = render(<Layout isBot={false} isUser />);

    fireEvent.scroll(window, { target: { scrollY: 500 } });

    expect(asFragment()).toMatchSnapshot();
    expect(getByTestId('header').classList.contains('-fixed')).toBeTruthy();
  });

  it('bot load', () => {
    const { asFragment } = render(<Layout isBot isUser={false} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('bot load scroll relative header', () => {
    const { asFragment, getByTestId } = render(<Layout isBot isUser={false} />);

    fireEvent.scroll(window, { target: { scrollY: 500 } });

    expect(asFragment()).toMatchSnapshot();
    expect(getByTestId('header').classList.contains('-fixed')).toBeFalsy();
  });
});
