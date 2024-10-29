import { IncomingMessage } from 'http';
import IORedis from 'ioredis';

export interface CacheIncomingMessage extends IncomingMessage {
  cache?: IORedis.Redis
}
