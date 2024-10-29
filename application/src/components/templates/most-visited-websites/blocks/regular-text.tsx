import { ReactNode } from 'react';
import { Text } from '@semcore/typography';

interface Props {
    children: ReactNode;
    mt?: number;
    color?: string;
}

const RegularText = ({ children, mt, color }: Props): JSX.Element => (
  <Text tag="p" size={300} color={color} mt={mt} fontWeight="inherit">
    {children}
  </Text>
);

export default RegularText;
