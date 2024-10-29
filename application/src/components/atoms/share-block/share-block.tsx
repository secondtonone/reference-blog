import { shareUrlGenerators } from '~/utils';

import ButtonIcon from '../button-icon';
import LinkText from '../link-text';

export interface IShareBlockProps {
  pageTitle?: string;
  linkTitle?: string;
  hashtags?: string[];
  url: string;
}

const ShareBlock: React.FC<IShareBlockProps> = ({ linkTitle, ...other }) => (
  <>
    {Object
      .keys(shareUrlGenerators)
      .map(
        (key) => {
          const dataTest = `share-block-link-text-${key}`;
          return (
            <LinkText
              href={shareUrlGenerators[key]({ slug: key, ...other })}
              currentColor
              undecorated
              unhovered
              key={dataTest}
              style={{ marginRight: '10px' }}
              target="_blank"
              rel="noopener noreferrer nofollow"
              data-test={dataTest}
              title={linkTitle}
            >
              <ButtonIcon
                sizes={[18, 20]}
                aria-label={key}
                code={key}
                border
                colored
                currentColor
              />
            </LinkText>
          );
        }
      )}
  </>
);

export default ShareBlock;
