export default function getHash(path: string): string {
  const isHash = path.match(/#(.+)/i);

  if (isHash) {
    return isHash.pop();
  }

  return '';
}
