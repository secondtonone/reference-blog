import ContainerStyled from '../box-adaptive';

interface Props {
  full?: boolean;
  shrink?: boolean;
  'data-test'?: string;
  id?: string;
}

const Container: React.FC<Props> = ({
  children,
  full,
  shrink,
  'data-test': dataTest = 'container',
  id
}) => (
  <ContainerStyled
    data-test={dataTest}
    id={id}
    full={full}
    p={{
      _: '0 15px',
      x: '0 24px',
      sm: '0 45px',
      lg: !full ? '0 65px' : '0 40px',
    }}
    width={{ _: !shrink ? '100%' : '', lg: !full ? 1140 : '100%' }}
    maxWidth={{ lg: full ? 1440 : '' }}
    m="0 auto"
    display="flex"
    flexDirection="column"
    flex="1"
    position="relative"
    height="100%"
  >
    {children}
  </ContainerStyled>
);

export default Container;
