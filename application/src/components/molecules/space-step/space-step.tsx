import { nanoid } from 'nanoid';
import BoxAdaptive, { BoxAdaptiveProps } from '~/components/atoms/box-adaptive';

// const colors = [
//   '',
//   '#F51A38',
//   '#FF642D',
//   '#FFC200',
//   '#89CA4F',
//   '#46E1AA',
//   '#10C1B7',
//   '#00A9FF',
//   '#0071CD',
//   '#B880FF',
//   '#8D52EB',
//   '#FF7AD3',
//   '#E142E1',
//   '#D3159E'
// ];

const SpaceStep: React.FC<BoxAdaptiveProps> = ({ size, ...props }) => (
  <BoxAdaptive
    width="100%"
    // bg={colors[size]}
    key={`box-${nanoid()}`}
    position="relative"
    zIndex={2}
    {...props}
  />
);

export default SpaceStep;
