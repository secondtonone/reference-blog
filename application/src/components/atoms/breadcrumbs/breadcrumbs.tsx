import styled from 'styled-components';
import Link from 'next/link';
import {
  BoxAdaptive,
  TextContent
} from '..';

type Link = {
  url: string,
  name: string | string[]
}

export interface BreadcrumbsProps {
  links?: Link[],
  muted?: boolean,
  hideMain?: boolean
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ links, muted }) => {
  if (!links || links.length === 0) {
    return null;
  }

  return (
    <BreadcrumbsStyled muted={muted} pt={{ _: 6, sm: 7 }} data-test="breadcrumbs">
      <TextContent fontSize={{ _: 1, sm: 2 }} as="ul" data-test="breadcrumbs-links">
        {links?.map((page, idx) => (
          Boolean(page?.name) && (
          <li data-test={`breadcrumbs-link-level-${idx}`} key={page?.name?.toString()}>
            <a href={page.url.endsWith('/') ? page.url : `${page.url}/`}>
              {page.name}
            </a>
          </li>
          )
        ))}
      </TextContent>
    </BreadcrumbsStyled>
  );
};

const BreadcrumbsStyled = styled(BoxAdaptive)<{muted?: boolean}>`
  color: ${({ theme, muted }) => (muted ? theme.secondary4 : 'inherit')};
  flex: 1;
  width: 100%;

  ul {
    list-style-type: none;
    display: flex;
    padding: 0;
    margin: 0;
  }

  li + li {
    margin-left: 4px;
    padding-left: 2px;
  }

  a {
    text-decoration: none;
  }
`;

export default Breadcrumbs;
