export enum CacheStatusNames {
  NO = 'no',
}

type CacheStatus = keyof typeof CacheStatusNames;

export default CacheStatus;
