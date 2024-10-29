import Document, {
  Html, Head, Main, NextScript, DocumentContext
} from 'next/document';
import getConfig from 'next/config';
import { ServerStyleSheet } from 'styled-components';
import { getSubdomain } from '~/utils';
import isServer from '~/constants/is-server';
import { SubdomainsViewModel } from '~/view-model';

interface Props {
  isTop100?: boolean,
  isUser?: boolean,
  lang: SubdomainsViewModel
}

class CustomDocument extends Document<Props> {
  static async getInitialProps(ctx: DocumentContext) {
    const css = new ServerStyleSheet();
    const { publicRuntimeConfig: { locales } } = getConfig();
    const page = ctx.renderPage;
    const subdomain = getSubdomain(isServer ? ctx?.req?.headers?.host : window?.location?.host);
    const lang = subdomain === 'www' ? 'en' : (locales.includes(subdomain) ? subdomain : 'en');

    try {
      ctx.renderPage = () => (
        page({
          enhanceApp: (App) => props => (
            css.collectStyles(<App {...props} />)
          )
        })
      );

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {css.getStyleElement()}
          </>
        ),
        lang
      };
    } finally {
      css.seal();
    }
  }

  render(): JSX.Element {
    const { lang = 'en' } = this.props;

    return (
      <Html lang={lang}>
        <Head>
          <link
            rel="preconnect"
            href="https://static.example.com"
          />

          <link
            rel="dns-prefetch"
            href="https://static.example.com"
          />

          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
          />

          <link
            rel="preload"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap"
            as="style"
          />

          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap" rel="stylesheet" />

          <link rel="preconnect" href="https://www.google-analytics.com" />
          <link rel="preconnect" href="https://google-analytics.bi.owox.com" />
          <style>{'html[data-theme=dark] body { background: #111317; color: #fff; }'}</style>
          <style>{'html[data-theme=dark] .blog-header-navbar { background: #21232B; color: #fff; }'}</style>
          <style>{'html body, .blogader-navbar { background: #fff; color: #000; }'}</style>
          <style>{'.ch2-dialog {z-index: 98 !important;}.ch2-icon{bottom: 118px !important;}@media(min-width: 960px){.ch2-icon{bottom: 60px !important;}}'}</style>
          <link rel="icon" type="image/png" href="https://static.example.com/blogxt-static/favicon/favicon.ico" />
          <link rel="icon" type="image/png" sizes="32x32" href="https://static.example.com/blogxt-static/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="https://static.example.com/blogxt-static/favicon/favicon-16x16.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="https://static.example.com/blogxt-static/favicon/apple-touch-icon.png" />
          <link rel="mask-icon" href="https://static.example.com/blogxt-static/favicon/safari-pinned-tab.svg" color="#ff642d" />

          <meta name="msapplication-TileColor" content="#421983" />
          <meta name="theme-color" content="#ffffff" />
          <meta property="fb:app_id" content="339433896413300" />

          <link type="application/rss+xml" rel="alternate" href="/blog/feed/" title="RSS" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <noscript>
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap"
              media="all"
            />
          </noscript>
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
