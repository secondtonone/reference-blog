import { useState } from 'react';
import clsx from 'clsx';
import styled from 'styled-components';

import { Box } from '@semcore/flex-box';
import { Text } from '@semcore/typography';
import Tag from '@semcore/tag';
import {
  Bar, BarChart, CartesianGrid, XAxis, YAxis, LabelList, ResponsiveContainer
} from '@semcore/chart';

import VisitsRecord from '~/components/templates/most-visited-websites/view-model/visits-record.view-model';
import Industry from '~/components/templates/most-visited-websites/enums/industy';
import formatNum from '~/components/templates/most-visited-websites/utils/format-num';
import data from '~/components/templates/most-visited-websites/data/industry-ranks.json';
import texts from '~/components/templates/most-visited-websites/data/texts.json';

import CountryLabel from './country-label';
import BlockWrap from './block-wrap';
import RegularText from './regular-text';
import HiddenTable from './hidden-table';

const CustomizedYAxisTick = ({ y, payload }) => (
  <g transform={`translate(${0},${y + 4})`}>
    <text x={0} y={0} fontSize={14} textAnchor="start" fill="#333">
      {payload.value}
    </text>
  </g>
);

const onFormatValue = (value: number | string) => formatNum(
  Number(value),
  { fractionCount: 0, billionFractionCount: 2 }
);

const IndustryBlock = (): JSX.Element => {
  const [activeCategory, setActiveCategory] = useState(Industry.Education);
  const categories = Object.values(Industry);

  const dataWithFirstTenItems: VisitsRecord[] = data[activeCategory].slice(0, 10);
  const maxValue = dataWithFirstTenItems
    .reduce((acc, value) => Math.max(acc, Number(value.visits)), 0);
  const maxChartValue = maxValue + maxValue * 0.1;

  const categoryTitle = `The Most Visited Websites - US, ${activeCategory} Category`;

  return (
    <StyledIndustryBlock>
      <BlockWrap>
        <div className="titleWrap">
          <Text tag="h2" fontWeight={500} size={500}>
            Insights on the Most Popular Sites in the US by Industry
          </Text>
        </div>
        <RegularText>{texts.industryBlock.description}</RegularText>
        <div>
          <Box mt={10} mb="-8px">
            {categories.map((category, idx) => (
              <Tag
                className={clsx('industry-tag', {
                  'industry-tag_active': category === activeCategory,
                })}
                key={category}
                interactive
                size="l"
                use="primary"
                mr={idx + 1 === categories.length ? 0 : 2}
                mb={2}
                onClick={() => {
                  if (category === activeCategory) {
                    return;
                  }
                  setActiveCategory(category);
                }}
              >
                {category}
              </Tag>
            ))}
          </Box>
          <div className="chartWrap">
            <div className="chartContainer">
              <div className="chart">
                <Box mb={4}>
                  <Text tag="h3" size={500} fontWeight={500} mb={2}>
                    {activeCategory}
                  </Text>
                  <CountryLabel />
                </Box>
                <ResponsiveContainer height={450}>
                  <BarChart
                    data={dataWithFirstTenItems}
                    layout="vertical"
                    barCategoryGap={20}
                    barSize={20}
                    margin={{ right: 55 }}
                  >
                    <CartesianGrid horizontal={false} vertical />
                    <XAxis
                      type="number"
                      tickFormatter={onFormatValue}
                      tickCount={6}
                      domain={[0, maxChartValue]}
                    />
                    <YAxis
                      dataKey="domain"
                      type="category"
                      width={150}
                      tick={(axisData) => <CustomizedYAxisTick {...axisData} />}
                    />
                    <Bar dataKey="visits" fill="#b880ff">
                      <LabelList
                        dataKey="visits"
                        position="right"
                        offset={32}
                        formatter={onFormatValue}
                        // @ts-ignore
                        style={{ fill: '#333' }}
                      />
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </BlockWrap>
      <BlockWrap>
        <div className="titleWrap">
          <Text tag="h3" fontWeight={500} size={500}>
            {categoryTitle}
          </Text>
        </div>
        <>
          {texts.industryBlock.categories[activeCategory].paragraphs.map((paragraph, idx) => (
            <RegularText key={paragraph} mt={idx ? 4 : 0}>
              {paragraph}
            </RegularText>
          ))}
        </>
      </BlockWrap>
      {Object.keys(data).map((c) => {
        const industryCategory = c as Industry;
        return (
          <HiddenTable
            key={c}
            category={industryCategory}
            data={data[industryCategory].slice(0, 10)}
          />
        );
      })}
    </StyledIndustryBlock>
  );
};

const StyledIndustryBlock = styled.section`
    padding-top: 32px;
    padding-bottom: 48px;

    & .titleWrap {
        margin-bottom: 20px;
    }

    & .chartWrap {
        margin-left: -20px;
        margin-right: -20px;
        padding: 32px 20px;
        overflow-x: scroll;
    }

    & .chartContainer {
        width: 994px;
    }

    & .chart {
        margin-right: 20px;
        padding: 24px;
        box-shadow: 0 2px 16px 4px rgba(174, 178, 186, 0.4);
        border-radius: 8px;
    }

    & .titleBlock {
        display: flex;
        flex-direction: column;
        margin-bottom: 16px;
    }

    & .category {
        margin-top: 0;
        margin-bottom: 8px;
        font-size: 25px !important;
        font-weight: 500 !important;
        line-height: 28px !important;
    }

    & .industry-tag {
        font-weight: inherit !important;
    }

    & .industry-tag:hover,
    & .industry-tag_active {
        color: #fff !important;
        background-color: #b880ff !important;
    }

    & .industry-tag_active {
        pointer-events: none;
    }

    @media screen and (min-width: 992px) {
        padding-top: 80px;
        padding-bottom: 114px;

        & .titleWrap {
            margin-bottom: 12px;
        }

        & .chartWrap {
            margin-left: auto;
            margin-right: auto;
            padding-left: 0;
            padding-right: 0;
            overflow-x: visible;
        }

        & .chartContainer {
            width: auto;
            max-width: 944px;
        }

        & .chart {
            width: auto;
            max-width: 924px;
            margin-right: 0;
        }

        & .titleBlock {
            flex-direction: row;
            align-items: flex-end;
        }

        & .category {
            margin-right: 38px;
            margin-bottom: 0;
        }
    }
`;

export default IndustryBlock;
