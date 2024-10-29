export default function percentFlattering(row: number[], target: number) {
  const off = target - row.reduce((acc, value) => acc + Math.round(value), 0);
  return row
    .map((value, index) => Math.round(value)
      + Number(off > index)
      - Number(index >= (row.length + off)));
}
