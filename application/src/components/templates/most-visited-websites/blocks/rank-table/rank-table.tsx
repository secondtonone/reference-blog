import { useCallback, useState } from 'react';
import clsx from 'clsx';
import styled from 'styled-components';

import { Text } from '@semcore/typography';
import Button from '@semcore/button';
import { Flex } from '@semcore/flex-box';
import ArrowUpXS from '@semcore/icon/lib/ArrowUp/xs';
import ArrowDownXS from '@semcore/icon/lib/ArrowDown/xs';
import DesktopS from '@semcore/icon/lib/Desktop/s';
import MobileS from '@semcore/icon/lib/Mobile/s';
import Link from '@semcore/link';

import trafficRankData from '~/components/templates/most-visited-websites/data/ranks.json';
import formatNum from '~/components/templates/most-visited-websites/utils/format-num';
import toPercentage from '~/components/templates/most-visited-websites/utils/to-percentage';
import toTime from '~/components/templates/most-visited-websites/utils/to-time';
import RankRecord from '~/components/templates/most-visited-websites/view-model/rank-record.view-model';
import { FROM_TOP100_QS } from '~/components/templates/most-visited-websites/constants';
import { sendAnalyticEvent } from '~/analytics';

export default function RankTable(): JSX.Element {
  const initialVisibleEl = 20;

  const [visibleEl, updateVisibleEl] = useState(initialVisibleEl);

  const maxVisibleEl = 100;
  const isBtnVisible = maxVisibleEl > visibleEl;

  const onLinkClick = useCallback((domain) => sendAnalyticEvent('click-rank-domain', {
    label: `${domain}`
  }), []);

  return (
    <div>
      <StyledRankTable>
        <table className="table">
          <thead>
            <tr className="tableHead">
              <th className="tableTh cell__trafficRank">Traffic rank</th>
              <th className="tableTh cell__domain">Domain</th>
              <th className="tableTh cell__visits">Visits</th>
              <th className="tableTh cell__share">
                <DesktopS mr={2} />
                <div>Desktop share</div>
              </th>
              <th className="tableTh cell__share">
                <MobileS mr={2} />
                <div>Mobile share</div>
              </th>
              <th className="tableTh cell__depth">Pages/visit</th>
              <th className="tableTh cell__duration">
                <p className="cell_ellipsis" title="Avg. visit duration">
                  Avg. visit duration
                </p>
              </th>
              <th className="tableTh cell__bounceRate">Bounce rate</th>
            </tr>
          </thead>
          <tbody className="tableBody">
            {(trafficRankData as RankRecord[]).map((item, idx) => (
              <tr
                key={item.rank}
                className={clsx('tableRow', {
                  tableRow_isHidden: idx + 1 > visibleEl,
                  tableRow_last: idx + 1 === visibleEl,
                })}
              >
                <td className="cell cell__trafficRank">
                  <div>{item.rank}</div>
                  {!!item.rankChange && (
                    <div
                      className={clsx('cell__rankChange', {
                        cell__rankChange_up: item.rankChange > 0,
                        cell__rankChange_down: item.rankChange < 0,
                      })}
                    >
                      {item.rankChange > 0 && !!item.rankChange ? (
                        <ArrowUpXS mr={1} />
                      ) : (
                        <ArrowDownXS mr={1} />
                      )}
                      <div>{Math.abs(item.rankChange)}</div>
                    </div>
                  )}
                </td>
                <td className="cell cell__domain">
                  <p className="cell_ellipsis" title={item.domain}>
                    <Link
                      href={`https://www.example.com/website/${item.domain}/?${FROM_TOP100_QS}`}
                      target="_blank"
                      onClick={() => onLinkClick(item.domain)}
                    >
                      {item.domain}
                    </Link>
                  </p>
                </td>
                <td className="cell cell__visits">{formatNum(item.visits, { fractionCount: 2 })}</td>
                <td className="cell cell__share">
                  <Text color="dark-green" fontWeight="inherit">
                    {toPercentage(item.desktop_share)}
                    %
                  </Text>
                  <Text ml={3} fontWeight="inherit">
                    {formatNum(item.desktop_visits, { fractionCount: 2 })}
                  </Text>
                </td>
                <td className="cell cell__share">
                  <Text color="orange" fontWeight="inherit">
                    {toPercentage(item.mobile_share)}
                    %
                  </Text>
                  <Text ml={3} fontWeight="inherit">
                    {formatNum(item.mobile_visits, { fractionCount: 2 })}
                  </Text>
                </td>
                <td className="cell cell__depth">{item.pages_per_visit.toFixed(1)}</td>
                <td className="cell cell__duration">{toTime(item.time_on_site)}</td>
                <td className="cell cell__bounceRate">
                  {toPercentage(item.bounce_rate)}
                  %
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </StyledRankTable>
      <Flex justifyContent="center">
        {isBtnVisible && (
        <Button
          className="rank-table-button"
          size="xl"
          mt={4}
          onClick={() => {
            (async () => {
              const pageCoordY = window.pageYOffset;

              await updateVisibleEl(visibleEl + 20);
              await window.scrollTo(0, pageCoordY);
            })();
          }}
        >
          Show 20 more
        </Button>
        )}
      </Flex>
    </div>
  );
}

const StyledRankTable = styled.div`
    overflow-x: scroll;

    & .table {
        width: 932px;
        font-size: 14px !important;
        font-weight: 400 !important;
        line-height: 20px !important;
        border-collapse: collapse;
    }

    & .tableHead {
        display: flex;
    }

    & .tableTh {
        position: relative;
        display: flex;
        flex: none;
        align-items: center;
        padding: 10px;
        box-sizing: border-box;
        background-color: #f2f3f4;
        border-right: 1px solid #dee3e5;
        border-bottom: 1px solid #dee3e5;
        font-weight: normal !important;
        white-space: nowrap;
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
        flex-direction: row;
        background-color: #fff;
        border-bottom: 1px solid #dee3e5;
    }

    & .tableRow:hover {
        background-color: #f6f7f7;
    }

    & .tableRow_isHidden {
        position: absolute;
        top: auto;
        left: -10000px;
        overflow: hidden;
    }

    & .tableRow_last {
        border-width: 0;
    }

    & .cell {
        display: flex;
        align-items: center;
        flex: none;
        min-height: 45px;
        padding: 10px;
        box-sizing: border-box;
        overflow: hidden;
        white-space: nowrap;
    }

    & .cell_ellipsis {
        margin: 0;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        font-weight: inherit !important;
    }

    & .cell__trafficRank {
        width: 96px;
        align-items: center;
    }

    & .cell__rankChange {
        display: flex;
        flex-shrink: 0;
        align-items: center;
        margin-left: 12px;
        line-height: 20px !important;
    }

    & .cell__rankChange_up {
        color: #4fae33;
    }

    & .cell__rankChange_down {
        color: #ed2d2d;
    }

    & .cell__domain {
        flex-grow: 1;
        width: 140px;
    }

    & .cell__visits {
        width: 76px;
        justify-content: flex-end;
    }

    & .cell__share {
        width: 144px;
        justify-content: flex-end;
    }

    & .cell__depth {
        width: 90px;
        justify-content: flex-end;
    }

    & .cell__duration {
        width: 136px;
        justify-content: flex-end;
    }

    & .cell__bounceRate {
        width: 96px;
        justify-content: flex-end;
    }

    & .rank-table-button {
        width: 100%;
    }

    @media screen and (min-width: 768px) {
        & .rank-table-button {
            width: auto;
            margin-left: auto;
            margin-right: auto;
        }
    }

    @media screen and (min-width: 972px) {
        & .table {
            width: 100%;
        }
    }

    @media screen and (min-width: 992px) {
        overflow-x: visible;

        & .table {
            display: flex;
            flex-direction: column;
        }

        & .cell__duration {
            width: 96px;
        }
    }

    @media screen and (min-width: 1040px) {
        & .cell__duration {
            flex-grow: 1;
        }
    }

    @media screen and (min-width: 1080px) {
        & .cell__duration {
            width: 140px;
            flex-grow: 0;
        }
    }

    @media screen and (min-width: 1140px) {
        & .tableTh,
        & .cell {
            padding: 12px;
        }

        & .cell__depth {
            width: 94px;
        }

        & .cell__bounceRate {
            width: 100px;
        }
    }
`;
