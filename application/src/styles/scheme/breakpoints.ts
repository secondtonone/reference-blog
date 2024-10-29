import { ViewportViewModel } from '~/view-model';

export const Viewport: ViewportViewModel = {
  xs: '0px',
  x: '375px',
  xm: '500px',
  sm: '768px',
  md: '960px',
  lg: '1140px',
  xl: '1280px',
  xxl: '1440px'
};

type ViewPortVariants = (
  '500px' | 500 | '1440px' | 1440 | '960px'
  | 960 | '0px' | 0 | number | string | '1280px'
  | 1280 | '768px' | 768 | '375px' | 375 | '1140px' | 1140
)[];

const breakpoints: { [key in keyof ViewportViewModel]: number | string }
  & ViewPortVariants = Object.values(Viewport);

const [xs, x, xm, sm, md, lg, xl, xxl] = breakpoints as string[];

breakpoints.xs = xs;
breakpoints.x = x;
breakpoints.xm = xm;
breakpoints.sm = sm;
breakpoints.md = md;
breakpoints.lg = lg;
breakpoints.xl = xl;
breakpoints.xxl = xxl;

export default breakpoints;

export {
  x,
  xm,
  sm,
  md,
  lg,
  xl,
  xxl
};

export const mediaQueries = Object.keys(Viewport).reduce((acc, size) => {
  acc[size] = `(min-width: ${Viewport[size]})`;
  return acc;
}, {});
