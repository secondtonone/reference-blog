import styled from 'styled-components';

import BlockWrap from '~/components/templates/most-visited-websites/blocks/block-wrap';
import RegularText from '~/components/templates/most-visited-websites/blocks/regular-text';
import reportDate from '~/components/templates/most-visited-websites/constants/report-date';

export default function TopBlock(): JSX.Element {
  return (
    <StyledTopBlock>
      <BlockWrap>
        <div className="wrap">
          <div className="textWrap">
            <h1 className="title">Top 100: The&nbsp;Most&nbsp;Visited Websites in&nbsp;the&nbsp;US</h1>
            <p className="subtitle">
              [
              {reportDate.year}
              {' '}
              Top Websites Edition]
            </p>
            <div className="description">
              <RegularText>
                Discover the most visited websites in the world’s top economy,
                as the US sets the global
                trend when it comes to the top sites by traffic received.
              </RegularText>
            </div>
          </div>
        </div>
      </BlockWrap>
    </StyledTopBlock>
  );
}

const StyledTopBlock = styled.section`
    & .wrap {
        position: relative;
        margin-top: 40px;
        margin-bottom: 40px;
        padding-bottom: 330px;
    }

    & .wrap::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        width: 290px;
        height: 290px;
        background-image: url('https://static.example.com/power-pages/top100/img/batman-1.svg');
        background-repeat: no-repeat;
        background-position: center;
    }

    & .title {
        margin: 0 0 12px !important;
        font-weight: 500 !important;
        font-size: 30px !important;
        line-height: 38px !important;
    }

    & .subtitle {
        margin: 0;
        font-weight: 500 !important;
        font-size: 16px !important;
        line-height: 24px !important;
    }

    & .description {
        margin: 20px 0 0;
    }

    @media screen and (min-width: 360px) {
        & .wrap {
            padding-bottom: 340px;
        }

        & .wrap::after {
            right: 50%;
            transform: translateX(50%);
            width: 300px;
            height: 300px;
        }
    }

    @media screen and (min-width: 600px) {
        & .wrap {
            padding-bottom: 0;
        }

        & .wrap::after {
            top: -8px;
            right: -4px;
            transform: translateX(0);
            width: 200px;
            height: 200px;
        }

        & .textWrap {
            max-width: 64%;
        }
    }

    @media screen and (min-width: 768px) {
        & .wrap {
            padding-bottom: 90px;
        }

        & .wrap::after {
            width: 300px;
            height: 300px;
        }

        & .textWrap {
            max-width: 60%;
        }
    }

    @media screen and (min-width: 900px) {
        & .textWrap {
            max-width: 65%;
        }
    }

    @media screen and (min-width: 992px) {
        & .wrap {
            margin-top: 64px;
            margin-bottom: 60px;
            padding-bottom: 56px;
        }

        & .wrap::after {
            top: -10px;
            right: 0;
            width: 400px;
            height: 400px;
        }

        & .textWrap {
            max-width: 456px;
        }

        & .title {
            font-weight: 700 !important;
            font-size: 48px !important;
            line-height: 56px !important;
        }

        & .subtitle {
            font-size: 25px !important;
            line-height: 28px !important;
        }

        & .description {
            margin-top: 32px;
        }
    }
`;
