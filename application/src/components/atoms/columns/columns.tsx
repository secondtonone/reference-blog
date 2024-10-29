import BoxAdaptive, { BoxAdaptiveProps } from '../box-adaptive';

const Columns: React.FC<BoxAdaptiveProps> = ({ children, ...props }) => (
  <BoxAdaptive
    data-test="columns"
    m={{ _: '0 -15px', lg: '0 -20px' }}
    display="flex"
    flexWrap="wrap"
    {...props}
  >
    {children}
  </BoxAdaptive>
);

export default Columns;
