const numberKFormatter = (num: number) => (Math.abs(num) > 999
  ? `${(Math.abs(num) / 1000).toFixed(1)}K`
  : Math.abs(num));

export default numberKFormatter;
