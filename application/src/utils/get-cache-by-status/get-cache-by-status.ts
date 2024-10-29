import { CacheStatusNames } from '~/enums/cache-status';

const getCacheByStatus: (request?: { cache?: unknown }, status?: string | string[]) => unknown = (
  request, status
) => (
  status === CacheStatusNames.NO ? undefined : request?.cache
);

export default getCacheByStatus;
