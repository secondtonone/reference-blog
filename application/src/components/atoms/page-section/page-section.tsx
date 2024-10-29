import styled from 'styled-components';
import {
  space,
  SpaceProps,
} from 'styled-system';

type SectionProps = SpaceProps;

const PageSection: React.FC<SpaceProps> = ({ children, ...props }) => (
  <SectionStyled pb={{ _: 60, sm: 100 }} {...props}>
    {children}
  </SectionStyled>
);

const SectionStyled = styled.div<SectionProps>`
  ${space}
`;

export default PageSection;
