interface Options {
  fractionCount: number;
  billionFractionCount?: number;
  millionFractionCount?: number;
  thousandsFractionCount?: number;
}

const format = (num: number, divisor: number, fraction: number): string => (num / divisor)
  .toFixed(fraction);

export default function formatNum(value: number, options: Options): string {
  const {
    fractionCount,
    billionFractionCount,
    millionFractionCount,
    thousandsFractionCount
  } = options;

  switch (true) {
    case !value:
      return '0';
    case value >= 1000000000:
      return `${format(value, 1000000000, billionFractionCount || fractionCount)}B`;
    case value >= 1000000:
      return `${format(value, 1000000, millionFractionCount || fractionCount)}M`;
    default:
      return `${format(value, 1000, thousandsFractionCount || fractionCount)}K`;
  }
}
