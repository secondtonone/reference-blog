import Link from 'next/link';
import { ErrorNotFound } from '~/components/organisms';

interface ArticlesEmptyProps {
  heading?: string
  caption?: string
  withAction?: boolean
}

const ArticlesEmpty: React.FC<ArticlesEmptyProps> = ({
  heading = 'No articles yet!',
  caption = 'Category articles list empty',
  withAction
}) => (
  <ErrorNotFound
    heading={heading}
    caption={caption}
  >
    {withAction ? (
      <>
        &nbsp;
        <Link href="/blog" passHref>
          <a>return to main</a>
        </Link>
      </>
    ) : null }
  </ErrorNotFound>
);

export default ArticlesEmpty;
