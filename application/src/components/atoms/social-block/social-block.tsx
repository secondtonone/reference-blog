import ButtonIcon from '../button-icon';
import LinkText from '../link-text';
import { SocialViewModel } from '~/view-model';

const filterRegex = /([\w.-]+)\/?$/gm;
const getAccountName = (link: string) => (link.match(filterRegex) ? link.match(filterRegex)[0] : '');

export interface ISocialBlockProps {
  resources: Partial<SocialViewModel>,
  linkedPrefix?: 'in' | 'company',
  inBlock?: boolean,
}

const SocialBlock: React.FC<ISocialBlockProps> = ({
  resources,
  linkedPrefix = 'in',
  inBlock,
}) => {
  const Url = {
    twitter: 'https://twitter.com',
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    linkedin: `https://www.linkedin.com/${linkedPrefix}`,
    youtube: 'https://www.youtube.com/user',
  };

  return (
    <>
      {Object
        .keys(resources)
        .filter((key) => resources[key] !== '')
        .map(
          (key) => (
            <LinkText
              href={`${Url[key]}/${getAccountName(resources[key])}`}
              currentColor
              undecorated
              unhovered
              key={key}
              style={{ marginRight: inBlock ? '6px' : '10px', marginBottom: inBlock ? 0 : '10px' }}
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <ButtonIcon
                sizes={inBlock ? [14, 13] : [18, 20]}
                aria-label={key}
                code={key}
                border
                colored
                currentColor
                view={inBlock ? 'filled' : undefined}
              />
            </LinkText>
          )
        )}
    </>
  );
};

export default SocialBlock;
