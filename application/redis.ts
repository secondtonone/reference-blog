import Redis from 'ioredis';
import color from 'picocolors';

const redisConnect = () => {
  const redisHost = process.env.REDIS_HOST;
  const redisCacheDb = +(process.env.REDIS_CACHE_DB || 0);

  if (redisHost && color) {
    // eslint-disable-next-line no-console
    console.log(`${color.green(`redis connected on: ${redisHost}, db: ${redisCacheDb}`)}`);
  }

  return redisHost
    ? new Redis(6379, redisHost, {
      db: redisCacheDb,
      lazyConnect: true
    })
    : null;
};

export default redisConnect;
