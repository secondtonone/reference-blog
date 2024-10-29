import { useCallback } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import animations from '~/styles/animations';
import { sendAnalyticEvent } from '~/analytics';

interface ArticleTocListProps {
  onClick?: () => void
  width?: number
  internal?: boolean
  activeId?: string
}

const ArticleTocList: React.FC<ArticleTocListProps> = ({
  children,
  onClick,
  ...props
}) => {
  const { asPath } = useRouter();

  const linkAnalyticHandler = useCallback(() => {
    sendAnalyticEvent('article-toc-click', {
      label: asPath
    });
  }, [asPath]);

  const onLinkClickHandler = useCallback((event) => {
    const target = event.target as HTMLAnchorElement;

    if (target.tagName === 'A') {
      if (typeof onClick === 'function') onClick();

      linkAnalyticHandler();
    }
  }, [onClick, linkAnalyticHandler]);

  return (
    <Toc
      {...props}
      onClick={onLinkClickHandler}
    >
      {children}
    </Toc>
  );
};

const Toc = styled.div<Pick<ArticleTocListProps, 'width' | 'internal' | 'activeId'>>`
  ${({ width }) => (width ? `width: ${width}px;` : '')}
  ul {
    list-style: none;
    padding: 0;
    margin-top: 8px;
    margin-left: 8px;
  }

  & > ul {
    margin-bottom: 8px;
    margin-top: 0;
    margin-left: 0;
    height: 100%;
  }

  li {
      padding-bottom: 8px;
      list-style: none;
      margin: 0;
      animation: ${animations.fadeIn} .4s ease-in-out;

      &:last-child {
        padding-bottom: 0;
      }

      + li {
        margin: 0;
      }

      & a {
        text-decoration: none;
        color: ${({ theme }) => (theme.secondary4)} !important;
        line-height: 1.6;
        font-size: 14px;
        font-weight: 400;
        transition: color .1s ease-in-out;

        &:active,
        &[href="#${({ activeId }) => (activeId)}"],
        &:hover {
          text-decoration: none;
          color: ${({ theme, internal }) => (theme.isDark || internal ? theme.white : theme.opposed)} !important;
        }
      }
    }
`;

export default ArticleTocList;
