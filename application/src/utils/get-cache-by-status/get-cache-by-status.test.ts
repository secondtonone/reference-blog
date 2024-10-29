import { getCacheByStatus } from '~/utils/';

const request = { cache: true };

describe('getCacheByStatus', () => {
  it('with cache and status no', () => {
    expect(getCacheByStatus(request, 'no')).toBeUndefined();
  });

  it('with cache and status something, but do not equal no', () => {
    expect(getCacheByStatus(request, 'yes')).toBe(true);
    expect(getCacheByStatus(request, '')).toBe(true);
    expect(getCacheByStatus(request)).toBe(true);
  });

  it('empty', () => {
    expect(getCacheByStatus()).toBeUndefined();
  });

  it('empty request and status no ', () => {
    expect(getCacheByStatus({}, 'no')).toBeUndefined();
  });
});
