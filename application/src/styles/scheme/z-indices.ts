import range from 'lodash.range';

export default [...range(0, 11), ...range(20, 110, 10), ...range(200, 1100, 100)];

export type IzIndices = number[];
