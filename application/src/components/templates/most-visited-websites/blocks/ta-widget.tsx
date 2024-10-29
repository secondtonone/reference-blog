import styled from 'styled-components';

import Button from '@semcore/button';

import WidgetWrap from './widget-wrap';

const TAWidget = (): JSX.Element => (
  <StyledTAWidget>
    <WidgetWrap className="ta-widget-wrap">
      <div className="content">
        <h2 className="title">
          Explore&nbsp;traffic&nbsp;patterns&nbsp;in&nbsp;your&nbsp;industry
          {' '}
          with&nbsp;Open&nbsp;.Trends
        </h2>
        <Button
          className="ta-widget-button"
          tag="a"
          href="https://www.example.com/trending-websites/global/all?utm_source=top100&utm_medium=LP&utm_campaign=2022-opentrends"
          use="primary"
          theme="warning"
          size="xl"
        >
          Get insights
        </Button>
      </div>
    </WidgetWrap>
  </StyledTAWidget>
);

const StyledTAWidget = styled.div`
    margin-top: 0 !important;
    margin-bottom: 0 !important;
    font-size: inherit !important;
    line-height: inherit !important;
    background-color: #00a8ff;

    & .title {
        margin-top: 0 !important;
        margin-bottom: 24px !important;
        font-size: 24px !important;
        font-weight: 500 !important;
        line-height: 28px !important;
    }

    & .ta-widget-wrap {
        position: relative;
        width: 100% !important;
        padding-top: 40px;
        padding-bottom: 300px;
        color: #fff;
        text-align: center;
        box-sizing: border-box;
    }

    & .ta-widget-wrap::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 50%;
        transform: translateX(50%);
        width: 280px;
        height: 257px;
        background-image: url('https://static.example.com/power-pages/top100/img/batman-3.svg');
        background-repeat: no-repeat;
    }

    & .ta-widget-button {
        width: 100%;
        -webkit-appearance: none;
    }

    @media screen and (min-width: 992px) {
        & .content {
            max-width: 610px !important;
        }

        & .title {
            margin-bottom: 20px !important;
        }

        & .ta-widget-wrap {
            padding-top: 32px;
            padding-bottom: 40px;
            text-align: left;
            box-sizing: content-box;
        }

        & .ta-widget-wrap::after {
            right: 30px;
            transform: none;
            width: 310px;
            height: 285px;
        }

        & .ta-widget-button {
            width: auto;
            padding-left: 16px;
            padding-right: 16px;
        }
    }

    @media screen and (min-width: 1140px) {
        & .ta-widget-wrap::after {
            right: -28px;
        }
    }
`;

export default TAWidget;
