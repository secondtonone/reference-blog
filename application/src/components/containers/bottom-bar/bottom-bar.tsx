import styled from 'styled-components';
import BoxAdaptive, { BoxAdaptiveProps } from '~/components/atoms/box-adaptive';
import { getScheme } from '~/styles/scheme';

const lightTheme = getScheme();

interface BottomBarProps extends BoxAdaptiveProps {
  'data-test'?: string
}

const BottomBar: React.FC<BottomBarProps> = ({
  children,
  ...props
}) => (
  <BarStyled
    bottom={{ _: 0, lg: 30 }}
    left={{ _: 0, lg: 40 }}
    width={{ _: '100%', lg: 635 }}
    textAlign={{ _: 'center', sm: 'left' }}
    p={{ _: 5, x: 6, sm: '19.5px 45px' }}
    pb={6}
    fontSize={{ _: 1, sm: 2 }}
    lineHeight={1.65}
    display={{ sm: 'flex' }}
    justifyContent={{ sm: 'space-between' }}
    alignItems={{ lg: 'center' }}
    borderRadius={{ _: '10px 10px 0 0', lg: '10px' }}
    position="fixed"
    zIndex={90}
    {...props}
  >
    {children}
  </BarStyled>
);

const BarStyled = styled(BoxAdaptive)`
  background: ${lightTheme.opposed};
  color: ${lightTheme.secondary1};
`;

export default BottomBar;
