import UAParser from 'ua-parser-js';
import { BreakpointViewModel } from '~/view-model';

export const defaultBreakpoint: BreakpointViewModel = {
  isPhone: false,
  isTablet: false,
  isDesktop: true
};

const getDeviceType = (req = null): BreakpointViewModel => {
  const useragent = (req && req?.headers['user-agent'])
    || (typeof navigator !== 'undefined' && navigator?.userAgent)
    || '';
  const { type } = new UAParser(useragent).getDevice();

  const isPhone = (type === 'mobile');
  const isTablet = (type === 'tablet');
  const isDesktop = !(isPhone || isTablet);

  return {
    isPhone,
    isTablet,
    isDesktop
  };
};

export default getDeviceType;
