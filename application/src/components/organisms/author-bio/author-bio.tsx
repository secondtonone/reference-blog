import styled from 'styled-components';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { AuthorViewModel } from '~/view-model';
import { TextContent } from '~/components/atoms';
import BoxAdaptive, { BoxAdaptiveProps } from '~/components/atoms/box-adaptive';
import PhotoAvatar, { PhotoAvatarProps } from '~/components/atoms/photo-avatar';
import { dropTags } from '~/utils';

const SocialBlock = dynamic(
  import('~/components/atoms/social-block'),
  { ssr: false }
);

interface Props extends BoxAdaptiveProps, AuthorViewModel, Pick<PhotoAvatarProps, 'photoMask'> {
  inBlock?: boolean,
}

const SCALE = 0.6;

const AuthorBio: React.FC<Props> = ({
  id,
  photo,
  photoMask,
  name,
  bio = '',
  company,
  position,
  socials,
  inBlock,
  clipping,
  ...props
}) => {
  const { webSite, ...webs } = socials || {};
  const avatar = (
    <PhotoAvatar
      data-test="author-photo"
      photo={photo || 'https://static.example.com/semblog-next-static/authors/author-empty.jpeg'}
      scale={inBlock ? SCALE : 1}
      photoMask={photoMask}
    />
  );

  return (
    <BoxAdaptive
      data-test="author-bio"
      display="flex"
      flexDirection={inBlock ? { _: 'column', xm: 'row' } : 'column'}
      alignItems={inBlock ? 'flex-start' : 'center'}
      {...props}
    >
      {inBlock ? (
        <Hovered>
          <Linked id={id} data-test="author-link">{avatar}</Linked>
        </Hovered>
      ) : avatar}
      <BoxAdaptive
        data-test="author-info"
        display="flex"
        justifyContent="center"
        flexDirection="column"
        alignItems={inBlock ? 'flex-start' : 'center'}
        ml={inBlock ? { _: 0, xm: 6 } : 0}
      >
        <BoxAdaptive
          mt={inBlock ? { _: 2, xm: '6px' } : { _: 1, x: 3 }}
          mb={inBlock ? 2 : 1}
          display="flex"
          alignItems={inBlock ? 'center' : ''}
        >
          <TextContent
            data-test="author-name"
            as={inBlock ? 'span' : 'h1'}
            accentFont={!inBlock}
            fontSize={inBlock ? 2 : { _: 9, xm: 19 }}
            fontWeight={{ _: 'bold' }}
            lineHeight={1.2}
          >
            {inBlock ? (
              <Linked id={id} data-test="author-link">
                <TextUppercaseStyled>{name}</TextUppercaseStyled>
              </Linked>
            ) : name}
          </TextContent>
          {
            inBlock ? (
              <BoxAdaptive data-test="author-socials" display="flex" ml={4}>
                <SocialBlock resources={webs} inBlock={inBlock} />
              </BoxAdaptive>
            ) : null
          }
        </BoxAdaptive>
        {inBlock ? null : (
          <TextUppercaseStyled
            data-test="author-job"
            mb={6}
            fontSize={2}
            fontWeight={{ _: 'normal' }}
            lineHeight={1.5}
          >
            <TextColored>
              {position
                .toLowerCase()
                .replace(company.toLowerCase(), '')
                .replace('at ', '')}
              {' '}
              {webSite ? (
                <>
                  {company ? 'AT' : ''}
                  {' '}
                  <Link href={webSite} passHref>
                    <a target="_blank" rel="nofollow">
                      {company}
                    </a>
                  </Link>
                </>
              ) : (company ? `AT ${company}` : '')}
            </TextColored>
          </TextUppercaseStyled>
        )}
        <TextColored
          data-test="author-caption"
          fontWeight={{ _: 'normal' }}
          mb={inBlock ? { _: '50px', xm: '90px' } : 6}
          fontSize={inBlock ? { _: 2 } : { _: 2, xm: 3 }}
          lineHeight={1.65}
          textAlign={inBlock ? 'left' : 'center'}
          maxWidth={660}
        >
          {dropTags(bio)}
        </TextColored>
        {
          inBlock ? null : (
            <BoxAdaptive data-test="author-socials" display="flex" mb={{ _: 50, xm: 70 }}>
              <SocialBlock resources={webs} />
            </BoxAdaptive>
          )
        }
      </BoxAdaptive>
    </BoxAdaptive>
  );
};

const Linked: React.FC<Pick<AuthorViewModel, 'id'>> = ({ id, children, ...props }) => (
  <AvatarStyled>
    <Link href={`/user/${id}`}>
      <a {...props} target="_blank">{children}</a>
    </Link>
  </AvatarStyled>
);

const AvatarStyled = styled.span`
  display: flex;
`;

const TextUppercaseStyled = styled(TextContent)`
  text-transform: uppercase;

  a:hover {
    color: ${({ theme }) => theme.orangeBrand};
  }
`;

const Hovered = styled.span`
  &:hover + div ${TextUppercaseStyled} {
    color: ${({ theme }) => theme.orangeBrand};
  }
`;

const TextColored = styled(TextContent)`
  color: ${({ theme }) => theme.secondary5};
`;

export default AuthorBio;
