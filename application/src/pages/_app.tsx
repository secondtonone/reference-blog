import '~/styles/layout.css';
import '~/styles/fonts.css';
import '~/styles/normalize.css';
import 'lazysizes';

import { AppProps, NextWebVitalsMetric } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import getConfig from 'next/config';
import dynamic from 'next/dynamic';

import * as Sentry from '@sentry/node';
import { Integrations } from '@sentry/tracing';
import { ThemeProvider as ThemeContext } from 'next-themes';
import { sendAnalyticEvent } from '~/analytics';

import themeKey from '~/constants/theme-key';
import SubdomainContext from '~/contexts/subdomain-context';
import PopupProvider from '~/providers/popup-provider';
import { Page } from '~/components/atoms';
import isServer from '~/constants/is-server';

const SvgSprite = dynamic(import('~/components/containers/svg-sprite'), { ssr: false });

const {
  publicRuntimeConfig: {
    GTAG_TRACKING_ID,
    sentryConfig
  }
} = getConfig();

if (sentryConfig.ACTIVE) {
  Sentry.init({
    enabled: true,
    dsn: sentryConfig.DSN,
    // @ts-ignore
    integrations: isServer
      ? [new Sentry.Integrations.Http({ tracing: true })]
      : [new Integrations.BrowserTracing()],
    tracesSampleRate: sentryConfig.TRACES_RATE,
    release: sentryConfig.RELEASE,
    environment: sentryConfig.ENV
  });
}

interface Props extends AppProps {
  err: any
}

const App = ({
  Component, pageProps, err
}: Props) => {
  const language = pageProps?.canonicalSubdomain === 'www' ? 'en' : pageProps.canonicalSubdomain || 'en';
  const hideSubscribe = false;
  const isUserDevice = pageProps?.isUser ?? true;

  return (
    <>
      <Script
        id="gtag-analytics"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];

            window.dataLayer.push({
              'dimension2': 'Unlogged-User', 
              'dimension3': 'not set', 
              'dimension5': '{"_fbp":"fb.1.1615035967638.1412396531"}',
              'dimension12': 'not set'
            });

            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTAG_TRACKING_ID}');
          `
        }}
      />
      <SubdomainContext.Provider
        value={{
          language,
          hideSubscribe,
          isUserDevice
        }}
      >
        <ThemeContext
          disableTransitionOnChange
          storageKey={themeKey}
          defaultTheme="light"
        >
          <PopupProvider>
            <Page>
              <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
              </Head>
              <Component
                {...pageProps}
                err={err}
              />
            </Page>
          </PopupProvider>
        </ThemeContext>
      </SubdomainContext.Provider>
      <Script
        src="https://static.example.com/ref-code-script/js/1.3.2/ref.js"
        strategy="lazyOnload"
        onLoad={() => {
          // @ts-ignore
          if ('ReferralCookieHandler' in window && typeof ReferralCookieHandler?.default === 'function') { ReferralCookieHandler.default(); }
        }}
      />
      <SvgSprite />
    </>
  );
};

export function reportWebVitals({
  id, name, value, label
}: NextWebVitalsMetric) {
  sendAnalyticEvent(label === 'web-vital' ? 'web-vitals' : 'next-custom-metric', {
    label: id,
    action: name,
    value: Math.round(name === 'CLS' ? value * 1000 : value),
  });
}

export default App;
