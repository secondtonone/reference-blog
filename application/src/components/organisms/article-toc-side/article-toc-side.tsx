import { useCallback } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import { TextContent, BoxAdaptive } from '~/components/atoms';
import { sendAnalyticEvent } from '~/analytics';
import IntersectionContainer from '~/components/containers/intersection-container';
import ArticleToc from '~/components/organisms/article-toc';
import useTitles, { TitlesProps, Title } from '~/hooks/use-titles';
import { useOnScreenFromElements } from '~/hooks';
import ArticleTocList from '~/components/containers/article-toc-list';

const TITLE = 'Table of contents';

interface ArticleTocSideProps extends TitlesProps {
  width?: number
  isEnabled?: boolean
}

const ArticleTocSide: React.FC<ArticleTocSideProps> = ({
  articleSelector,
  levels,
  isEnabled,
  width = 193
}) => {
  const { asPath } = useRouter();
  const headings = useTitles({ articleSelector, levels, updateTrigger: asPath });

  const currentElement = useOnScreenFromElements(levels.join(','), {
    rootMargin: '200px',
    threshold: 1
  });

  const shownHandler = useCallback(() => {
    sendAnalyticEvent('article-toc-click-shown', {
      label: asPath
    });
  }, [asPath]);

  if (headings.length === 0 || !isEnabled) {
    return (
      <div>
        <MockContainer
          width={{ _: 0, md: 0, lg: width + 40 }}
        />
      </div>
    );
  }

  return (
    <IntersectionContainer
      once
      onIntersection={shownHandler}
      position="sticky"
      top="136px"
      mt={22}
      mr={40}
      height="100%"
      display={{ _: 'none', md: 'block' }}
    >
      <ArticleTocList
        data-test="table-of-content"
        width={width}
        activeId={currentElement?.id || ''}
      >
        <Uppercased
          level={0}
          lineHeight={1.6}
          fontWeight={{ _: 'accent' }}
          pb={4}
        >
          {TITLE}
        </Uppercased>
        <ArticleToc<Title>
          headings={headings}
          isExpanded
        />
      </ArticleTocList>
    </IntersectionContainer>
  );
};

const Uppercased = styled(TextContent)`
  text-transform: uppercase;
`;

const MockContainer = styled(BoxAdaptive)`
  @media (max-width: 1366px) {
    width: 0;
  }
`;
export default ArticleTocSide;
