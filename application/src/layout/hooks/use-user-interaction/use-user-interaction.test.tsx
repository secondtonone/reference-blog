/**
 * @jest-environment jsdom
 */
import { renderHook } from '@testing-library/react-hooks';
import { fireEvent } from '@testing-library/react';
import useUserInteraction from '.';

describe('use user interaction works', () => {
  beforeEach(() => {
    Object.defineProperty(global.window, 'scrollY', { value: 0 });
  });

  test('scroll by bot no affect header position', () => {
    const { result } = renderHook(() => useUserInteraction({
      isUser: false,
      headerRef: null
    }));

    fireEvent.scroll(window, { target: { scrollY: 100 } });

    expect(result.current).toEqual({ fixedHeader: false, scrolled: 0 });
    expect(global.window.scrollY).toBe(100);
  });
});
