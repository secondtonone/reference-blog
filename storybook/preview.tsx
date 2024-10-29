import 'lazysizes';
import {
  DocsContainer,
  Title,
  Subtitle,
  Description,
  Primary,
  Stories
} from '@storybook/addon-docs';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { setConfig } from 'next/config';
import ThemeDecorator from './theme-decorator';

import './preview.css';
import '../application/src/styles/fonts.css';

const DocsContainerCustom = (props) => (
  <DocsContainer {...props} />
);

const DocsPageCustom = () => (
  <>
    <Title />
    <Subtitle />
    <Description />
    <Primary />
    <Stories />
  </>
);

export const parameters = {
  layout: 'centered',
  docs: {
    container: DocsContainerCustom,
    page: DocsPageCustom
  },
  nextRouter: {
    Provider: RouterContext.Provider,
    path: '/',
    asPath: '/',
    query: {},
    push() { return null; }
  },
};

export const decorators = [
  ThemeDecorator,
];

setConfig({
  publicRuntimeConfig: {
    GA_TRACKING_ID: '',
    GTAG_TRACKING_ID: '',
    isProd: false,
    apiPublic: '',
    appUrl: '',
    locales: [],
    alternates: [],
    cookieName: ''
  }
});
