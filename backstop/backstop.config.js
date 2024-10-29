const pages = require('./pages');

const { TEST_TYPE, LOCAL } = process.env;

const TARGET_DIR = '.';

const Url = {
  REFERENCE: process.env.BASE_URL,
  TEST: process.env.APP_URL,
};

const viewports = [
  {
    label: 'Desktop xl',
    width: 1280,
    height: 1024
  },
  {
    label: 'iPhone 5',
    width: 320,
    height: 568,
  },
];

if (TEST_TYPE === 'short') {
  viewports.push(
    {
      label: 'iPhone X',
      width: 375,
      height: 812,
    },
    {
      label: 'iPad Mini',
      width: 768,
      height: 1024,
    }
  );
}

if (TEST_TYPE === 'long') {
  viewports.push(
    {
      label: 'iPhone 5 landscape',
      width: 568,
      height: 320,
    },
    {
      label: 'BlackBerry Z30',
      width: 360,
      height: 640,
    },
    {
      label: 'BlackBerry Z30 landscape',
      width: 640,
      height: 360,
    },
    {
      label: 'BlackBerry Playbook',
      width: 600,
      height: 1024,
    },
    {
      label: 'BlackBerry Playbook landscape',
      width: 1024,
      height: 600,
    },

    {
      label: 'iPhone X landscape',
      width: 812,
      height: 375,
    },
    {
      label: 'iPhone 6/7/8',
      width: 375,
      height: 667,
    },
    {
      label: 'iPhone 6/7/8 landscape',
      width: 667,
      height: 375,
    },
    {
      label: 'iPhone 6/7/8 Plus',
      width: 414,
      height: 736,
    },
    {
      label: 'iPhone 6/7/8 Plus landscape',
      width: 736,
      height: 414,
    },
    {
      label: 'iPad Pro',
      width: 1024,
      height: 1366,
    },
    {
      label: 'iPad Pro landscape',
      width: 1366,
      height: 1024,
    },
    {
      label: 'Desktop lg',
      width: 1140,
      height: 768,
    },
    {
      label: 'Desktop xxl',
      width: 1600,
      height: 768,
    }
  );
}

const scenarios = pages.map((page) => {
  const referenceUrl = `${Url.REFERENCE}${page}`;
  const url = `${Url.TEST}${page}`;

  return {
    label: page,
    cookiePath: `${TARGET_DIR}/screenshots/engine_scripts/cookies.json`,
    url,
    referenceUrl,
    readyEvent: '',
    readySelector: '',
    delay: 500,
    hideSelectors: [],
    removeSelectors: [],
    hoverSelector: '',
    clickSelector: '',
    postInteractionWait: 0,
    selectors: [],
    selectorExpansion: true,
    expect: 0,
    misMatchThreshold: 0.1,
    requireSameDimensions: true
  };
});

module.exports = {
  id: 'blog-next',
  viewports,
  scenarios,
  onBeforeScript: 'backstop-on-before.js',
  onReadyScript: 'backstop-on-ready.js',
  paths: {
    bitmaps_reference: `${TARGET_DIR}/screenshots/bitmaps_reference`,
    bitmaps_test: `${TARGET_DIR}/screenshots/bitmaps_test`,
    engine_scripts: LOCAL ? './' : './backstop',
    html_report: `${TARGET_DIR}/screenshots/html_report`,
    ci_report: `${TARGET_DIR}/screenshots/ci_report`,
  },
  report: ['browser', 'CI'],
  ci: {
    format: 'junit',
    testReportFileName: 'blog-next-xunit',
    testSuiteName: 'backstopJS',
  },
  asyncCaptureLimit: 5,
  asyncCompareLimit: 50,
  debug: false,
  debugWindow: false,
  engine: 'puppeteer',
  engineOptions: {
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-web-security',
      '--disable-features=IsolateOrigins',
      '--disable-site-isolation-trials',
    ],
    ignoreHTTPSErrors: false,
    headless: true,
  },
};
