import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';

import Link from '@semcore/link';
import SortUpXS from '@semcore/icon/lib/SortUp/xs';
import InstagramM from '@semcore/icon/lib/Instagram/m';

import { usePagination } from '~/hooks';
import usePageContext from '~hooks/use-page-context';
import { TextContent, Tooltip } from '~/components/atoms';
import Pagination from '~/components/organisms/pagination';
import trafficSnpData from '~/components/templates/blog-top-domains/data/snp-domains.json';
import trafficFortuneData from '~/components/templates/blog-top-domains/data/fortune-domains.json';
import formatNum from '~/components/templates/most-visited-websites/utils/format-num';
import DomainRecord from '~/components/templates/blog-top-domains/view-model/domain.view-model';
import toPercentage from '~/components/templates/most-visited-websites/utils/to-percentage';
import Diff from '~/components/templates/blog-top-domains/blocks/diff';
import RowOrder from '~/components/templates/blog-top-domains/enums/row-order';
import { FROM_SP500_QS, FROM_FORTUNE500_QS } from '~/components/templates/blog-top-domains/constants';
import { sendAnalyticEvent } from '~/analytics';

const PAGE_SIZES = [20, 50, 100];

const Icon = styled(SortUpXS)<{ active: boolean, order: RowOrder }>`
  color: ${({ active }) => (active ? '#575C66' : '#D1D4DB')} !important;
  transform: ${({ order }) => ((order === RowOrder.Ascending) ? 'rotate(0)' : 'rotate(180deg)')};
`;

export default function DomainTable(): JSX.Element {
  const [itemsCount, setItemsCount] = useState(0);
  const [queryParams, setQueryParams] = useState('');
  const [sortedRankData, setSortedRankData] = useState([]);
  const { page: { url } } = usePageContext();

  useEffect(() => {
    switch (url) {
      case 'blog/fortune-500':
        setItemsCount(trafficFortuneData.length);
        setQueryParams(FROM_FORTUNE500_QS);
        setSortedRankData(trafficFortuneData);
        break;
      case 'blog/sp-500':
        setItemsCount(trafficSnpData.length);
        setQueryParams(FROM_SP500_QS);
        setSortedRankData(trafficSnpData);
        break;
      default:
    }
  }, []);

  const [pageSize, setPageSize] = useState(20);
  const [sortBy, setSortBy] = useState('rank');
  const [order, setOrder] = useState<RowOrder>(RowOrder.Ascending);
  const [items, setItems] = useState<DomainRecord[]>([]);
  const {
    pageActive,
    onPageClick,
    perPage,
    nextPage,
  } = usePagination(itemsCount, pageSize);

  useEffect(() => {
    setItems(sortedRankData.slice((pageActive - 1) * pageSize, pageActive * pageSize));
  }, [perPage, pageActive, sortedRankData[0]]);

  const changeSortOrder = useCallback(() => (order === RowOrder.Ascending
    ? setOrder(RowOrder.Descending)
    : setOrder(RowOrder.Ascending)),
  [order]);

  const sort = useCallback((sortType: string, sortOrder?: RowOrder) => {
    const data = sortedRankData.slice();
    const ascendingSort = (a, b) => (sortType === 'company' ? a.company.localeCompare(b.company) : a[sortType] - b[sortType]);
    const descendingSort = (a, b) => (sortType === 'company' ? b.company.localeCompare(a.company) : b[sortType] - a[sortType]);
    if (sortOrder && sortType === sortBy) {
      data.sort((a, b) => ((sortOrder === RowOrder.Descending)
        ? ascendingSort(a, b)
        : descendingSort(a, b)));

      setSortedRankData(data);
      return;
    }

    data.sort((a, b) => ((sortOrder === RowOrder.Descending)
      ? descendingSort(a, b)
      : ascendingSort(a, b)));

    setSortedRankData(data);
  }, [sortBy, order, sortedRankData]);

  const onSort = useCallback((label) => {
    if (sortBy === label) {
      changeSortOrder();
      sort(label, order);
      return;
    }

    setSortBy(label);
    sort(label, order);
  }, [sortBy, order, sortedRankData]);

  const onLinkClick = useCallback((domain) => sendAnalyticEvent('click-sp-500-domain', {
    label: `${domain}`
  }), []);

  return (
    <StyledRankTable>
      <table className="table">
        <thead>
          <tr className="tableHead">
            <th
              className="tableTh active cell__rank"
              onClick={() => onSort('rank')}
            >
              Rank
              <Icon active={sortBy === 'rank'} order={order} />
            </th>
            <th
              className="tableTh active cell__company"
              onClick={() => onSort('company')}
            >
              Company
              <Icon active={sortBy === 'company'} order={order} />
            </th>
            <th className="tableTh cell__symbol">Symbol</th>
            <th className="tableTh cell__website">Website</th>
            <th
              className="tableTh active cell__traffic"
              onClick={() => onSort('traffic')}
            >
              Traffic
              <Icon active={sortBy === 'traffic'} order={order} />
              <Tooltip content="An estimate of total visits to the website over the last month." direction="top">
                (i)
              </Tooltip>
            </th>
            <th
              className="tableTh active cell__brand"
              onClick={() => onSort('brand_mentions')}
            >
              Brand Mentions
              <Icon active={sortBy === 'brand_mentions'} order={order} />
              <Tooltip content="The total number of online brand mentions that we found over the last month." direction="top">
                (i)
              </Tooltip>
            </th>
            <th
              className="tableTh active cell__social"
              onClick={() => onSort('social_media_audience')}
            >
              Social Media Audience
              <Icon active={sortBy === 'social_media_audience'} order={order} />
              <Tooltip content="The number of total followers across different social channels (Twitter, Instagram, Facebook). Relevant on the day of the last update." direction="top">
                (i)
              </Tooltip>
            </th>
          </tr>
        </thead>
        <tbody className="tableBody">
          {items.map((item) => (
            <tr key={item.rank} className="tableRow">
              <td className="cell cell__rank">
                <TextContent>{item.rank}</TextContent>
              </td>
              <td className="cell cell__company">{item.company}</td>
              <td className="cell cell__symbol">{item.symbol}</td>
              <td className="cell cell__website">
                <Link
                  className="cell_ellipsis"
                  href={`https://www.example.com/website/${item.website}/?${queryParams}`}
                  target="_blank"
                  onClick={() => onLinkClick(item.website)}
                >
                  {item.website}
                </Link>
              </td>
              <td className="cell cell__traffic">
                <TextContent>
                  {formatNum((item.traffic), { fractionCount: 2 })}
                  {item.traffic_change && <Diff value={toPercentage((item.traffic_change))} />}
                </TextContent>
              </td>
              <td className="cell cell__brand">
                <TextContent>
                  {formatNum(item.brand_mentions, { fractionCount: 2 })}
                  {item.brand_mentions_change
                    && <Diff value={toPercentage((item.brand_mentions_change))} />}
                </TextContent>
              </td>
              <td className="cell cell__social">
                <TextContent>
                  {formatNum(item.social_media_audience, { fractionCount: 2 })}
                  {item.social_media_audience_change
                    && <Diff value={toPercentage((item.social_media_audience_change))} />}
                </TextContent>
                {Boolean(item.sm_tracker_lp) && (
                  <Link className="sm_tracker_lp" href={item.sm_tracker_lp} target="_blank">
                    <InstagramM />
                  </Link>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ControlWrapper>
        {itemsCount > 20 && (
          <Pagination
            pageActive={pageActive}
            onPageClick={(page) => onPageClick(page || nextPage)}
            itemsCount={itemsCount}
            perPage={perPage}
          />
        )}
        <PerPageControl>
          Rows per page
          {PAGE_SIZES.map(size => (
            <Button
              key={size}
              className={clsx({ active: size === pageSize })}
              onClick={() => setPageSize(size)}
            >
              {size}
            </Button>
          ))}
        </PerPageControl>
      </ControlWrapper>
    </StyledRankTable>
  );
}

const StyledRankTable = styled.div`
    overflow-x: scroll;
    padding-bottom: 15px;

    & a {
      color: ${({ theme }) => (theme.isDark ? theme.orangeBrand : '#0071bc')}!important;
    }

    & .table {
        overflow: hidden;
        border-collapse: collapse;
    }

    & .tableHead {
        display: flex;
    }

    & .tableTh {
        font-size: 12px;
        position: relative;
        display: flex;
        flex: none;
        align-items: center;
        padding: 12px 0;
        box-sizing: border-box;
        border-bottom: 1px solid #575C66;
        font-weight: 700;
        white-space: nowrap;
    }
    & .tableTh:last-child {
        padding-right: 0;
    }
    & .tableTh span {
        color: #b5bac4;
        font-weight: 500;
        margin-left: 4px;
        cursor: pointer;
        width: 250px;
        z-index: 2;
        text-align: start;
    }
    & .tableTh svg {
        margin-left: 5px;
    }
    & .tableTh.active {
        cursor: pointer;
    }

    & .tableTh:last-child {
        border-right: 0;
    }

    & .tableBody {
        display: flex;
        flex-direction: column;
    }

    & .tableRow {
        display: flex;
        font-size: 13px;
        flex-direction: row;
        background-color: #fff;
        border-bottom: 1px solid #dee3e5;
    }

    & .tableRow:hover {
        background-color: #f6f7f7;
    }

    & .cell {
        display: flex;
        align-items: center;
        flex: none;
        min-height: 45px;
        padding: 10px 10px 10px 0;
        box-sizing: border-box;
        overflow: hidden;
        white-space: nowrap;
    }

    & .cell_ellipsis {
        margin: 0;

        text-overflow: ellipsis;
        overflow: hidden;
    }

    & .cell__rank {
        width: 57px;
    }

    & .cell__rankChange_up {
        color: #4fae33;
        display: flex;
    }

    & .cell__rankChange_down {
        color: #ed2d2d;
        display: flex;
    }

    & .cell__company {
        white-space: pre-wrap;
        font-weight: 700;
        width: 180px;
    }

    & .cell__symbol {
        width: 66px;
    }

    & .cell__website {
        width: 148px;
    }

    & .cell__traffic,
    & .cell__brand{
        width: 152px;
    }

    & .cell__social {
        width: 170px;
        justify-content: space-between;
    }

    & .sm_tracker_lp {
      z-index: 1;
    }

    & .sm_tracker_lp span {
      color: #000;
      border: none;
    }

    @media screen and (min-width: 700px) {
        & .cell__company {
            width: 190px;
        }
    }

    @media screen and (min-width: 900px) {
        padding-bottom: 20px;

        & .cell__company {
            width: 225px;
        }
        & .cell__symbol {
            width: 86px;
        }
    }

`;
const Button = styled.button`
    background-color: transparent;
    color: ${({ theme }) => (theme.isDark ? '#E1E1E2' : '#3E424B')};
    display: flex;
    border: 1px solid #6F7176;
    width: 42px;
    height: 42px;
    border-radius: 5px;
    justify-content: center;
    box-sizing: border-box;
    cursor: pointer;
    align-items: center;
    margin-left: 14px;

    &.active, &.active:hover {
      background-color: ${({ theme }) => (theme.isDark ? theme.orangeBrand : '#171A22')};
      color: #F6F7F8;
      border-color: ${({ theme }) => (theme.isDark ? theme.orangeBrand : '#171A22')};
    }
    &:hover {
      color: #FF642D;
      border-color: #FF642D;
    }
    &:active {
      color: #FFFFFF;
      border-color: #FF8157;
      background: #FF8157;
    }
`;
const ControlWrapper = styled.div`
    display: flex;
    flex-direction: column-reverse;
    left: 16px;
    right: 16px;
    align-items: center;
    margin-top: 80px;
    height: 70px;
    position: absolute;
    z-index: 2;

    & > div:first-child {
        width: 100%;
    }

    @media screen and (min-width: 400px) {
        & > div:first-child {
            width: 320px;
            align-self: start;
        }
    }

    @media screen and (min-width: 700px) {
        flex-direction: row;
        justify-content: space-between;
        margin-top: 40px;
        left: 24px;
        right: 24px;
    }

    @media screen and (min-width: 1000px) {
        left: 60px;
        right: 60px;
    }
`;
const PerPageControl = styled.div`
    display: flex;
    align-items: center;
    align-self: end;
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 32px;
`;
