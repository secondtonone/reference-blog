import { useCallback } from 'react';
import styled from 'styled-components';

import {
  TextContent,
  ButtonLink,
  LinkText
} from '~/components/atoms';

import BoxAdaptive, { BoxAdaptiveProps } from '~/components/atoms/box-adaptive';

export interface EpisodeCardProps extends BoxAdaptiveProps {
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
  title: React.ReactNode
  label?: React.ReactNode
  button: React.ReactNode
  link: string
  bordered?: boolean
}

const EpisodeCard: React.FC<EpisodeCardProps> = ({
  title,
  label,
  button,
  onClick,
  link,
  ...props
}) => {
  const onClickHandler = useCallback((e) => {
    if (typeof onClick === 'function') onClick(e);
  }, [onClick]);

  return (
    <BannerStyled
      data-test="episode-card"
      display="flex"
      justifyContent="space-between"
      flexDirection={{ _: 'column', sm: 'row' }}
      p={{ _: '20px 0', md: '24px 0' }}
      width="100%"
      {...props}
    >
      <BoxAdaptive
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        maxWidth={420}
      >
        {label ? (
          <LabelStyled
            data-test="episode-card-label"
            textAlign={{ _: 'left' }}
            fontSize={{ _: 3, md: 4 }}
            lineHeight={{ _: 1.2 }}
            fontWeight={{ _: 'normal' }}
            marginBottom={{ _: 3 }}
            level={0}
            accentFont
          >
            {label}
          </LabelStyled>
        ) : null }
        <TextContent
          data-test="episode-card-heading"
          textAlign={{ _: 'left' }}
          fontSize={{ _: 4, md: 6 }}
          lineHeight={{ _: 1.2 }}
          fontWeight={{ _: 'bold' }}
          level={0}
          accentFont
          height={title ? '100%' : '52px'}
        >
          {title}
        </TextContent>
      </BoxAdaptive>
      <BoxAdaptive
        display="flex"
        flexDirection={{ _: 'row' }}
        alignItems={{ _: 'flex-end' }}
      >
        <BoxAdaptive
          mb={{ _: 0, sm: '9px' }}
          display={{ _: 'none', sm: 'block' }}
          width={{ _: '100%', sm: 150 }}
        >
          <ButtonLink
            background="orangeBrand"
            data-test="episode-card-link"
            target="_blank"
            onClick={onClickHandler}
            href={link}
            w="100%"
          >
            {button}
          </ButtonLink>
        </BoxAdaptive>
        <BoxAdaptive
          mt={{ _: '10px', sm: '24px', md: '38px' }}
          display={{ _: 'block', sm: 'none' }}
          textAlign="center"
        >
          <LinkText onClick={onClickHandler} href={link} currentColor>{button}</LinkText>
        </BoxAdaptive>
      </BoxAdaptive>
    </BannerStyled>
  );
};

const BannerStyled = styled(BoxAdaptive)<{ bordered?: boolean }>`
  ${({ theme, bordered }) => (bordered ? `border-bottom: 1px solid ${theme.secondary3};` : '')}
  & {
    color: currentColor !important;
  }
  & div > a {
    font-size: 14px;
    color: currentColor !important;
    text-decoration: underline;
  }
`;

const LabelStyled = styled(TextContent)`
  color: ${({ theme }) => theme.orangeBrand} !important;
`;

export default EpisodeCard;
