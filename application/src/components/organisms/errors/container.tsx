import styled from 'styled-components';
import { BoxAdaptive, TextContent, Logo } from '~/components/atoms';

interface Props {
  heading: string,
  caption?: string,
  withLogo?: boolean,
  statusCode?: number
}

const Container: React.FC<Props> = ({
  heading,
  caption,
  children,
  withLogo,
  statusCode
}) => (
  <BoxAdaptive
    textAlign="center"
    pt={{ _: 100, sm: 120, lg: 140 }}
    pb={{ lg: 180 }}
    maxWidth={{ _: 280, sm: 750 }}
    margin="0 auto"
  >
    {withLogo && <Logo justifyContent="center" mb={{ _: 72 }} />}
    {statusCode > 0 && (
      <h1>{statusCode}</h1>
    )}
    <HeadingStyled
      fontSize={{ sm: 19 }}
      accentFont
      data-test="error-heading"
      level={2}
    >
      {heading}
    </HeadingStyled>
    {(caption || children) && (
      <MessageStyled
        pt={{ _: 20, sm: 24, lg: 40 }}
        lineHeight="1.6"
        fontSize={2}
        maxWidth={{ _: 280, sm: 600 }}
        margin="0 auto"
      >
        {caption && (
          <TextContentStyled
            data-test="error-caption"
            level={0}
          >
            {caption}
          </TextContentStyled>
        )}
        {children && (
          <TextContentStyled
            data-test="error-text"
            level={0}
          >
            {children}
          </TextContentStyled>
        )}
      </MessageStyled>
    )}
  </BoxAdaptive>
);

const MessageStyled = styled(BoxAdaptive)`
  a {
    color: ${({ theme }) => theme.orangeBrand};
  }
`;

const HeadingStyled = styled(TextContent)`
  color: ${({ theme }) => (theme.isLight ? theme.opposed : theme.secondary5)};
  margin: 0;
`;

const TextContentStyled = styled(TextContent)`
  color: ${({ theme }) => (theme.isLight ? theme.secondary5 : theme.secondary4)};
  display: block;
`;

export default Container;
