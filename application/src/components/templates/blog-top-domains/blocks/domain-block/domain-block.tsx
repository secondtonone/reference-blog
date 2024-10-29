import styled from 'styled-components';

import DomainTable from '~/components/templates/blog-top-domains/blocks/domain-table';
import BlockWrap from '~/components/templates/most-visited-websites/blocks/block-wrap';
import { TextContent } from '~/components/atoms';
import { REPORT_DATE_SP500, REPORT_DATE_FORTUNE500 } from '~/components/templates/blog-top-domains/constants/report-date';
import LegalText from '~/components/templates/blog-top-domains/blocks/legal-text';
import usePageContext from '~hooks/use-page-context';

const ReportDate = {
  'blog/sp-500': REPORT_DATE_SP500,
  'blog/fortune-500': REPORT_DATE_FORTUNE500
};

const DomainBlock = (): JSX.Element => {
  const { page: { url } } = usePageContext();

  return (
    <StyledRankBlock>
      <BlockWrap>
        <TextContent
          accentFont
          fontSize={{ _: 4, sm: 6 }}
          fontWeight="accent"
          marginBottom={5}
          level={0}
        >
          Global data,&nbsp;
          {ReportDate[url]}
        </TextContent>
      </BlockWrap>
      <div className="tableContainer">
        <DomainTable />
      </div>
      <LegalText />
    </StyledRankBlock>
  );
};

const StyledRankBlock = styled.section`
    width: 95%;
    max-width: 1126px;
    margin: 0 auto;
    padding-bottom: 20px;

    & .tableContainer {
        display: flex;
        position: relative;
        justify-content: center;
        padding: 16px 16px 160px;
        box-shadow: 0 8px 42px 7px rgba(174, 178, 186, 0.4);
        border-radius: 10px;
    }

    & .tableContainer::after {
        position: absolute;
        height: 100%;
        right: 14px;
        top: 0;
        width: 50px;
        content: '';
        background: ${({ theme }) => (theme.isDark ? 'linear-gradient(270deg, #111317 0%, rgba(255, 255, 255, 0) 100%)' : 'linear-gradient(270deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)')};
    }

    @media screen and (min-width: 700px) {
        padding-bottom: 48px;

        & .tableContainer {
            padding: 20px 24px 110px;
        }
        & .tableContainer::after {
            right: 24px;
        }
    }

    @media screen and (min-width: 1000px) {
        & .tableContainer {
            padding: 20px 60px 110px;
        }
        & .tableContainer::after {
            right: 60px;
        }
    }

    @media screen and (min-width: 1178px) {
        & .tableContainer::after {
            display: none;
        }
    }
`;

export default DomainBlock;
