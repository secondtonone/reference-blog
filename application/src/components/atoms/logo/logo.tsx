import styled from 'styled-components';
import BoxAdaptive, { BoxAdaptiveProps } from '~/components/atoms/box-adaptive';
import SvgIcon from '~/components/containers/svg-icon';

const Logo: React.FC<BoxAdaptiveProps> = (props) => (
  <BoxAdaptive
    height={22}
    display="flex"
    alignItems="center"
    data-test="logo"
    minWidth={146}
    {...props}
  >
    <LinkStyled href="/" target="_blank" data-test="logo-link-main" aria-label="To example" rel="noopener">
      <BrandIconStyled code="brand" size={[31, 19]} />
      <exampleIconStyled code="example" size={[66, 24]} />
    </LinkStyled>
    <LinkStyled href="/blog/" aria-label="To Blog">
      <LogoStyled data-test="logo-link-blog">
        <SvgIcon code="blog" size={[35, 17]} />
      </LogoStyled>
    </LinkStyled>
  </BoxAdaptive>
);

const LinkStyled = styled.a`
  display: flex;
  align-items: center;
  max-height: 22px;
`;

const LogoStyled = styled.span`
  margin-left: 6px;
  margin-top: 5px;
  display: inline-block;
`;

const BrandIconStyled = styled(SvgIcon)`
  display: inline-block;
  margin-right: 8px;
`;

const exampleIconStyled = styled(SvgIcon)`
  transition: .235s color;

  &:hover {
    color: ${({ theme }) => theme.orangeBrand};
    transition: .235s color;
  }

`;

export default Logo;
