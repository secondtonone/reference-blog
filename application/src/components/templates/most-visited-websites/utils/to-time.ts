export default function toTime(num: number): string {
  const hours = Math.floor(num / 3600);
  const minutes = Math.floor((num - hours * 3600) / 60);
  const seconds = num % 60;

  return `${hours ? `${hours}:` : ''}${minutes >= 10 ? minutes : `0${minutes}`}:${
    seconds >= 10 ? seconds : `0${seconds}`
  }`;
}
