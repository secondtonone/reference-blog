import { useCallback, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import PagePopup from '~/components/containers/page-popup';
import {
  BoxAdaptive, Button
} from '~/components/atoms';
import SvgIcon from '~/components/containers/svg-icon';
import IntersectionContainer from '~/components/containers/intersection-container';
import ArticleToc from '~/components/organisms/article-toc';
import ArticleTocList from '~/components/containers/article-toc-list';
import { sendAnalyticEvent } from '~/analytics';
import useTitles, { TitlesProps, Title } from '~/hooks/use-titles';
import { useOnScreenFromElements } from '~/hooks';
import BottomBar from './bottom-bar';

interface ArticleTocBottom extends TitlesProps {
  isEnabled?: boolean
}

const ArticleTocBottom: React.FC<ArticleTocBottom> = ({
  articleSelector,
  levels,
  isEnabled
}) => {
  const [isExpanded, setExpanding] = useState<boolean>(false);
  const { asPath } = useRouter();
  const headings = useTitles({ articleSelector, levels, updateTrigger: asPath });

  const currentElement = useOnScreenFromElements(levels.join(','), {
    rootMargin: '50px',
    threshold: 1
  });

  const toggleHandler = useCallback(() => {
    setExpanding(!isExpanded);
    sendAnalyticEvent('article-toc-toggle', {
      label: asPath
    });
    if (!isExpanded && currentElement) setTimeout(() => document.querySelector(`a[href="#${currentElement.id}"]`)?.scrollIntoView({ block: 'center' }), 100);
  }, [isExpanded, asPath, currentElement]);

  const shownHandler = useCallback(() => {
    sendAnalyticEvent('article-toc-click-shown', {
      label: asPath
    });
  }, [asPath]);

  if (headings.length === 0 || !isEnabled) {
    return null;
  }

  return (
    <IntersectionContainer
      once
      onIntersection={shownHandler}
      position="relative"
      zIndex="99"
    >
      {isExpanded
        ? (
          <PagePopup>
            {(hide) => (
              <BottomBar
                isExpanded={isExpanded}
                onClick={() => {
                  hide();
                  toggleHandler();
                }}
              >
                <CloseButton
                  position="absolute"
                  width="auto"
                  top="-40px"
                  right="15px"
                >
                  <Button
                    style={{ minWidth: '' }}
                    data-test="mobile-menu-popup-close"
                    use="tertiary"
                    onClick={() => {
                      hide();
                      toggleHandler();
                    }}
                    noborder
                  >
                    <SvgIcon size={[20, 20]} code="close" />
                  </Button>
                </CloseButton>
                <BoxAdaptive
                  overflow="auto"
                  textAlign="left"
                  maxHeight="40vh"
                  mb={20}
                >
                  <ArticleTocList
                    internal
                    activeId={currentElement?.id || ''}
                    onClick={() => {
                      hide();
                      toggleHandler();
                    }}
                  >
                    <ArticleToc<Title>
                      headings={headings}
                      isExpanded
                    />
                  </ArticleTocList>
                </BoxAdaptive>
              </BottomBar>
            )}
          </PagePopup>
        ) : (
          <BottomBar
            isExpanded={isExpanded}
            onClick={toggleHandler}
          />
        )}
    </IntersectionContainer>
  );
};

const CloseButton = styled(BoxAdaptive)`
  color: ${({ theme }) => (theme.isLight ? theme.black : theme.white)};
`;

export default ArticleTocBottom;
