import nextApp from 'next';
import morgan from 'morgan';
import isBot from 'isbot';
import { createServer } from 'http';
import connect from 'connect';

import { parse } from 'url';
import redis from './redis';

const port = Number.parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const blog = nextApp({ dev });
const handle = blog.getRequestHandler();

const lighthouseUserAgents = ['Chrome-Lighthouse'];

const detectBots = isBot.spawn();
const detectLighthouse = isBot.spawn(lighthouseUserAgents);

detectBots.exclude(lighthouseUserAgents);

const botDetectionMiddleware = (req, res, next) => {
  const userAgent = req.headers['user-agent'];
  const userAgentBot = detectBots(userAgent);
  const userAgentLH = detectLighthouse(userAgent);

  req.isUser = !userAgentLH && !userAgentBot;
  req.isBot = userAgentBot;
  req.isLH = userAgentLH;

  next();
};

const logger = morgan(formatLogs, {
  skip: (req) => {
    const skipCases = [
      req?.url === '/',
      req?.url?.startsWith('/api/check'),
      req?.method === 'OPTIONS',
      Boolean(process.env.LOGGING_DISABLED === 'true'),
    ];

    return skipCases?.some(validCase => validCase);
  }
});

const run = () => {
  const app = connect();
  const cache = redis();

  const cacheMiddleware = (req, res, next) => {
    req.cache = cache;

    next();
  };

  app.use(logger);
  app.use(cacheMiddleware);
  app.use(botDetectionMiddleware);

  app.use((req, res) => {
    const parsedUrl = parse(req.url, true);

    handle(req, res, parsedUrl);
  });

  try {
    createServer(app).listen(port, () => {
      // eslint-disable-next-line no-console
      console.log(`Blog run on http://localhost:${port}`);
    });
  } catch (error) {
    if (error) throw error;
  }
};

blog.prepare().then(run);

function formatLogs(payload, req, res) {
  return [
    'app="blog-front"',
    `date="${new Date(payload.date(req, res)).toISOString()}"`,
    `request="${payload.method(req, res)} ${payload.url(req, res)} HTTP/${payload['http-version'](req, res)}"`,
    `status="${payload.status(req, res)}"`,
    `method="${payload.method(req, res)}"`,
    `referrer="${payload.referrer(req, res) ?? '-'}"`,
    `remote_addr="${payload['remote-addr'](req, res)}"`,
    `user_agent="${payload['user-agent'](req, res)}"`,
    `protocol="HTTP/${payload['http-version'](req, res)}"`,
    `content_length="${payload.res(req, res, 'content-length')}"`,
    `accept_encoding="${req.headers['accept-encoding']}"`,
    `accept_language="${req.headers['accept-language']}"`,
    `response_time="${payload['response-time'](req, res)} ms"`
  ].join(' ');
}
