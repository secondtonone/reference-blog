import { useRouter } from 'next/router';
import { linkConstructor } from '~/utils';

interface Props {
  page: number
  children: (url: ReturnType<typeof linkConstructor>) => React.ReactNode
}

const PaginationLink: React.FC<Props> = ({
  children,
  page
}) => {
  const router = useRouter();

  return (
    <>
      {children(linkConstructor(router.asPath, page))}
    </>
  );
};

export default PaginationLink;
