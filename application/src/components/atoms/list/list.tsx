import styled from 'styled-components';
import { brUp } from '~/styles/helpers';
import { getScheme } from '~/styles/scheme';

const darkTheme = getScheme(true);

interface Props {
  items: (React.ReactNode & {key?: number | string })[]
  bullet?: React.ReactNode
  'data-test'?: string
  tag?: 'ul' | 'ol'
  fromIdx?: number
  internal?: boolean
}

const List: React.FC<Props> = ({
  items,
  bullet,
  'data-test': dataTest = 'list',
  tag = 'ul',
  fromIdx = 0,
  internal
}) => (
  <StyledList data-test={dataTest} as={tag} isCustom={!!bullet} internal={internal}>
    {items.map((item, index) => (
      <li key={item?.key || item?.toString()} data-test={`${dataTest}-item`}>
        {tag === 'ul' ? <span data-list="bullet">{bullet}</span> : <span data-list="number">{`${fromIdx + index + 1}.`}</span>}
        <div data-list="text">{item}</div>
      </li>
    ))}
  </StyledList>
);

const StyledList = styled.div<{ isCustom?: boolean, internal?: boolean}>`
  font-size: 14px;
  line-height: 1.6;
  font-weight: 400;
  list-style: none;

  ${brUp('xm', `
    font-size: 16px;
  `)}

  & li {
    padding: 0 0 10px 0;
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: baseline;
    color: ${({ theme, internal }) => (internal ? darkTheme.secondary4 : (theme.isDark ? theme.secondary4 : theme.secondary5))} !important;

    ${brUp('xm', `
      padding: 0 0 12px 0;
    `)}

    &:last-child {
      padding: 0;
    }

    & > div[data-list="text"] {
      padding-left: 14px;
      display: inline-block;

      ${brUp('xm', `
        padding-left: 16px;
      `)}
    }

    & > span[data-list="bullet"] {
      position: relative;
      display: inline-block;
      content: '';
      top: -2px;
      flex-shrink: 0;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      ${({ isCustom }) => (isCustom ? 'color' : 'background')}: ${({ theme, internal }) => (internal ? darkTheme.secondary5 : (theme.isDark ? theme.secondary5 : theme.opposed))} !important;

      ${brUp('xm', `
        width: 8px;
        height: 8px;
      `)}
    }

    & > span[data-list="number"] {
      display: inline-block;
      text-align: right;
      min-width: 24px;
      color: ${({ theme }) => (theme.isLight ? theme.opposed : theme.secondary5)} !important;
    }
  }
`;

export default List;
