const checkCacheReady = (cache, skip = false) => {
  const cacheConnected = (cache?.status === 'ready') && !skip;
  const cacheMethodsValid = [
    cache?.get,
    cache?.set,
  ].every(cacheMethod => typeof cacheMethod === 'function');

  return cacheConnected && cacheMethodsValid;
};

const getValue = async ({ cache, key }) => {
  const value = checkCacheReady(cache) ? await cache.get(key) : 'null';
  return JSON.parse(value);
};

const setValue = async ({
  cache,
  key,
  request,
  expire
}) => {
  let payload = null;

  if (typeof request !== 'function') return payload;

  payload = await request();

  if (checkCacheReady(cache, payload instanceof Error)) {
    await cache.set(key, JSON.stringify(payload), 'EX', expire);
  }

  return payload;
};

const checkValue = async ({
  cache,
  key,
  request,
  expire
}) => {
  const payload = await getValue({ cache, key });

  if (checkCacheReady(cache, payload instanceof Error)
    && payload?.data?.status && payload?.data?.status !== 'published') {
    await cache.del(key);

    return null;
  }

  if (payload) {
    return payload;
  }

  return setValue({
    cache,
    key,
    request,
    expire
  });
};

const service = ({
  cache,
  key,
  request,
  expire = 1800
}) => checkValue({
  cache,
  key,
  request,
  expire
});

export default service;
export { checkCacheReady };
