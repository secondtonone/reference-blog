import 'styled-components';
import breakpoints from './scheme/breakpoints';
import { ISpaces } from './scheme/space';
import { Theme } from './themes';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    breakpoints: typeof breakpoints;
    space: ISpaces;
    isDark: boolean;
    isLight: boolean;
  }
}
