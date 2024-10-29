import styled from 'styled-components';

import { List, Text } from '@semcore/typography';
import Link from '@semcore/link';
import { Box } from '@semcore/flex-box';

import { PageViewModel } from '~/view-model';

import reportDate from '~/components/templates/most-visited-websites/constants/report-date';
import { FROM_TOP100_QS } from '~/components/templates/most-visited-websites/constants';

import RankTable from './rank-table';
import BlockWrap from './block-wrap';
import RegularText from './regular-text';
import CountryLabel from './country-label';
import ParagraphWrap from './paragraph-wrap';

const RankBlock = ({ page }: { page: PageViewModel }): JSX.Element => {
  const { critical: { 'article-content': { content } } } = page || { title: '', preview: '', critical: { 'article-content': { content: '' } } };

  return (
    <StyledRankBlock>
      <BlockWrap>
        <Text tag="h2" size={500} fontWeight={500}>
          Top Websites in the US by Traffic [
          {reportDate.monthWithYear}
          ]
        </Text>
        <div className="subtitle">
          <RegularText>
            <>
              Based on data from the example
              {' '}
              <Link
                href="https://www.example.com/analytics/traffic/?utm_source=blog&utm_medium=lp&utm_campaign=en_top_100_websites_20201217"
                target="_blank"
              >
                Traffic Analytics tool
              </Link>
              , this page reveals
              {' '}
              <b>the top 100 most visited websites in the US</b>
              , as well as
              uncovering the top players across various industries.
            </>
          </RegularText>
          <RegularText mt={4}>
            We will be updating this post on a monthly basis,
            so you can keep track of all the market shifts
            and spot changes in user interest.
          </RegularText>
        </div>
      </BlockWrap>
      <div className="tableWrap">
        <div className="tableContainer">
          <Box mb={4}>
            <CountryLabel url={`/website/top/united-states/all/?${FROM_TOP100_QS}`} />
          </Box>
          <RankTable />
        </div>
        <Text size={300} tag="p" mt={8} color="#898d9a" fontWeight="inherit">
          *Some websites featured in the list above may contain adult content,
          please use caution when visiting unknown sites.
        </Text>
      </div>
      <BlockWrap>
        <ParagraphWrap>
          <>
            <Text tag="h2" size={500} fontWeight={500}>
              General Trends Across the Most Popular US Websites by Traffic
            </Text>
            <FormatHtml dangerouslySetInnerHTML={{ __html: content }} />
          </>
        </ParagraphWrap>
        <ParagraphWrap>
          <Text tag="h2" size={500} fontWeight={500}>
            It’s Not Just About the Traffic
          </Text>
          <RegularText mt={4}>
            <>
              Although observing position changes through traffic volume can help to
              {' '}
              <Link
                href="https://www.example.com/blog/uncover-market-trends/?utm_source=blog&utm_medium=lp&utm_campaign=en_top_100_websites_20201217"
                target="_blank"
              >
                analyze global trends
              </Link>
              {' '}
              and benchmark your performance against the competition,
              example’s Traffic Analytics reports
              also include important metrics to keep watch on:
            </>
          </RegularText>
          <List size={300} mt={3}>
            <List.Item mt={3}>
              <b>Mobile vs. desktop traffic share</b>
              {' '}
              shows which devices people use to enter a site page.
              When
              {' '}
              <Link
                href="https://www.example.com/blog/ins-and-outs-of-competitive-benchmarking/?utm_source=blog&utm_medium=lp&utm_campaign=en_top_100_websites_20201217"
                target="_blank"
              >
                doing competitive benchmarking
              </Link>
              , this metric can help to determine whether you need to implement certain
              steps (e.g. ensure further mobile optimization or come up with additional
              desktop traffic generation tactics)
              to strengthen your traffic acquisition strategy and stay in the game.
            </List.Item>
            <List.Item mt={3}>
              <b>Number of pages per visit, average visit duration, and bounce rate</b>
              {' '}
              reflect the
              quality of site content. If you spot that your competitor’s website shows better
              performance, it&apos;s a sign that you have to work on your
              {' '}
              <Link
                href="https://www.example.com/blog/seo-checklist/?utm_source=blog&utm_medium=lp&utm_campaign=en_top_100_websites_20201217"
                target="_blank"
              >
                SEO
              </Link>
              {' '}
              and
              {' '}
              <Link
                href="https://www.example.com/blog/content-creation/?utm_source=blog&utm_medium=lp&utm_campaign=en_top_100_websites_20201217"
                target="_blank"
              >
                content strategy
              </Link>
              , comparing the structure, content, and design of your site pages against theirs.
            </List.Item>
          </List>
        </ParagraphWrap>
      </BlockWrap>
    </StyledRankBlock>
  );
};

const FormatHtml = styled.div`
  p {
    margin-top: 16px;
    font-size: 16px;
    font-weight: inherit;
    line-height: 1.5;
  }

  a {
    border-bottom: 1px solid transparent;
  }

  a:hover {
    border-color: inherit;
  }
`;

const StyledRankBlock = styled.section`
    padding-bottom: 48px;

    & .subtitle {
        margin-top: 20px;
        margin-bottom: 32px;
    }

    & .tableWrap {
        padding-left: 20px;
        padding-right: 20px;
    }

    @media screen and (min-width: 992px) {
        padding-bottom: 124px;

        & .subtitle {
            margin-top: 12px;
            margin-bottom: 64px;
        }

        & .tableWrap {
            max-width: 1140px;
            margin-left: auto;
            margin-right: auto;
            padding-left: 30px;
            padding-right: 30px;
        }

        & .tableContainer {
            padding: 24px;
            box-shadow: 0 8px 42px 7px rgba(174, 178, 186, 0.4);
            border-radius: 10px;
        }
    }
`;

export default RankBlock;
