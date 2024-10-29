const ANALYZE_MODE = process.env.BUNDLE_ANALYZER === 'true';
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: ANALYZE_MODE
});
const SentryWebpackPlugin = require('@sentry/webpack-plugin');
const StatsScopeWebpackPlugin = require('@statoscope/webpack-plugin').default;
const path = require('path');

const sentryConfig = {
  DSN: process.env.SENTRY_DSN,
  ENV: process.env.SENTRY_ENVIRONMENT,
  RELEASE: process.env.SENTRY_RELEASE,
  TRACES_RATE: !Number.isNaN(process.env.SENTRY_TRACES_RATE) ? +process.env.SENTRY_TRACES_RATE : 1,
  ACTIVE: process.env.SENTRY_ENVIRONMENT !== 'localhost',
};

const GTAG_TRACKING_ID_PROD = 'GTM-N6TVKBN';
const GTAG_TRACKING_ID_TEST = 'GTM-5KSLFRN';
const GA_TRACKING_ID_PROD = 'UA-6197637-22';
const GA_TRACKING_ID_TEST = 'UA-189389858-1';

const appUrl = process.env.APP_URL ? `https://${process.env.APP_URL}` : '';
const assetPrefix = process.env.ASSET_PREFIX ?? '';

const isProd = ['https://www.example.com', 'https://blog-prod.k1.example.net'].includes(process.env.API_PUBLIC);
const isPreprod = process.env?.APP_URL?.includes('preprod');
const isRC = process.env?.APP_URL?.includes('.rc') && process.env?.APP_URL?.endsWith('example.net');
const isDev = process.env.NODE_ENV === 'development';
const isNotProd = isDev || isPreprod || isRC;

const GTAG_TRACKING_ID = isNotProd ? GTAG_TRACKING_ID_TEST : GTAG_TRACKING_ID_PROD;
const GA_TRACKING_ID = isNotProd ? GA_TRACKING_ID_TEST : GA_TRACKING_ID_PROD;

const apiPublic = process.env.API_PUBLIC;
const apiInternal = process.env.API_INTERNAL;
const stage = process.env.STAGE;

const requestsTimingLogging = process.env.REQUEST_TIMING_LOGGING === 'true';

const domains = [
  { title: 'English', locale: 'en', domain: 'www.example.com' },
  { title: 'Español', locale: 'es', domain: 'es.example.com' },
  { title: 'Deutsch', locale: 'de', domain: 'de.example.com' },
  { title: 'Français', locale: 'fr', domain: 'fr.example.com' },
  { title: 'Italiano', locale: 'it', domain: 'it.example.com' },
  { title: 'Português (Brasil)', locale: 'pt', domain: 'pt.example.com' },
];

const searchApi = {
  URL: process.env.SEARCH_API_URL,
  TOKEN: process.env.SEARCH_API_KEY
};

const nextConfig = {
  swcMinify: true,
  optimizeFonts: true,
  compress: false,
  assetPrefix,
  trailingSlash: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: true,
  publicRuntimeConfig: {
    GA_TRACKING_ID,
    GTAG_TRACKING_ID,
    isProd,
    apiPublic,
    appUrl,
    cookieName: 'sso_token',
    sentryConfig,
    locales: domains.map((lang) => lang.locale),
    forceSubdomain: ['feature', 'preprod'].includes(stage),
  },
  serverRuntimeConfig: {
    apiInternal,
    requestsTimingLogging,
    searchApi
  },
  images: {
    path: '/_next/image',
    domains: ['storage.googleapis.com', 'www.rc.example.net', 'static.example.com'],
  },
  generateBuildId: async () => (process.env.BUILD_ID ?? 'example-blog'),
  async redirects() {
    return [
      {
        source: '/user/',
        destination: '/blog/',
        permanent: true,
      },
      {
        source: '/',
        destination: appUrl ? '/blog/' : '/_dev/',
        permanent: true,
      },
      {
        source: '/blog/rss/',
        destination: '/blog/feed/',
        permanent: true
      },
      {
        source: '/blog/feeds/rss/',
        destination: '/blog/feed/',
        permanent: true
      },
      {
        source: '/user/:id//',
        destination: '/user/:id/',
        permanent: true
      },
      {
        source: '/blog//',
        destination: '/blog/',
        permanent: true
      },
      {
        source: '/blog/:slug//',
        destination: '/blog/:slug/',
        permanent: true
      },
      {
        source: '/blog/category/:slug//',
        destination: '/blog/category/:slug/',
        permanent: true
      },
      {
        source: '/blog/category/:slug/:subcategory//',
        destination: '/blog/category/:slug/:subcategory/',
        permanent: true
      },
      {
        source: '/blog/category',
        destination: '/blog/',
        permanent: true
      },
      {
        source: '/blog/category//',
        destination: '/blog/',
        permanent: true
      },
      {
        source: '/blog/category/:slug//',
        destination: '/blog/category/:slug/',
        permanent: true
      },
      {
        source: '/blog/sitemap//',
        destination: '/blog/sitemap/',
        permanent: true
      },
    ];
  },
  webpack: (config, { isServer }) => {
    config.resolve.alias['~'] = path.resolve(__dirname);

    if (!isServer) {
      config.resolve.alias['@sentry/node'] = '@sentry/react';
    }

    if (ANALYZE_MODE) {
      config.plugins.push(
        new StatsScopeWebpackPlugin({
          saveReportTo: 'bundle-metrics-report/report-[name]-[hash].html',
          saveStatsTo: 'bundle-metrics-report/stats-[name]-[hash].json',
          open: 'file',
          compressor: 'gzip',
        })
      );
    }

    if (process.env.APP_URL !== undefined) {
      config.plugins.push(
        new SentryWebpackPlugin({
          include: '.next',
          ignore: ['node_modules'],
          urlPrefix: '~/_next',
          release: sentryConfig.RELEASE,
          silent: false,
        })
      );
    }

    if (process.env.NODE_ENV === 'production') {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          maxInitialRequests: 25,
          minSize: 20000,
          maxSize: 400000,
          cacheGroups: {
            default: false,
            vendors: false,
            shared: {
              name: 'shared',
              minChunks: 3,
              priority: 20
            },
            styledComponents: {
              name: 'styled-components',
              test: /[/\\]node_modules[/\\](styled-components|styled-system)[/\\]/,
              enforce: true,
              reuseExistingChunk: true
            },
            example: {
              name: '@example',
              test: /[/\\]node_modules[/\\](@example)[/\\]/,
              enforce: true,
              reuseExistingChunk: true
            },
            lodash: {
              name: 'lodash',
              test: /lodash/,
              enforce: true,
              reuseExistingChunk: true
            },
            recharts: {
              name: 'recharts',
              test: /[/\\]node_modules[/\\](recharts)[/\\]/,
              enforce: true,
              reuseExistingChunk: true
            },
            semcore: {
              name: '@semcore',
              test: /[/\\]node_modules[/\\](@semcore|@react-semcore)[/\\]/,
              enforce: true,
              reuseExistingChunk: true
            },
            reshadow: {
              name: '@reshadow',
              test: /[/\\]node_modules[/\\](@reshadow)[/\\]/,
              enforce: true,
              reuseExistingChunk: true
            },
            flame: {
              name: '@flame',
              test: /[/\\]node_modules[/\\](@flame)[/\\]/,
              enforce: true,
              reuseExistingChunk: true
            },
          }
        }
      };
    }

    return config;
  },
};

module.exports = withBundleAnalyzer(nextConfig);
