import styled from 'styled-components';

import Button from '@semcore/button';

import WidgetWrap from './widget-wrap';

const MEWidget = (): JSX.Element => (
  <StyledMEWidget>
    <WidgetWrap className="me-widget-wrap">
      <div className="content">
        <h2 className="title">Reveal the top market players for any industry with&nbsp;Open&nbsp;.Trends</h2>
        <Button
          className="me-widget-button"
          tag="a"
          href="https://www.example.com/trending-websites/global/all?utm_source=top100&utm_medium=LP&utm_campaign=2022-opentrends"
          use="primary"
          theme="success"
          size="xl"
        >
          Try for free
        </Button>
      </div>
    </WidgetWrap>
  </StyledMEWidget>
);

const StyledMEWidget = styled.div`
    margin-top: 0 !important;
    margin-bottom: 0 !important;
    font-size: inherit !important;
    line-height: inherit !important;
    background-color: #ff788f;

    & .title {
        margin-top: 0;
        margin-bottom: 24px;
        font-size: 24px !important;
        font-weight: 500 !important;
        line-height: 28px !important;
    }

    & .me-widget-wrap {
        position: relative;
        width: 100% !important;
        padding-top: 40px;
        padding-bottom: 290px;
        color: #fff;
        text-align: center;
        box-sizing: border-box;
    }

    & .me-widget-wrap::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 50%;
        transform: translateX(50%);
        width: 275px;
        height: 240px;
        background-image: url('https://static.example.com/power-pages/top100/img/batman-2.svg');
        background-repeat: no-repeat;
    }

    & .me-widget-button {
        width: 100%;
        background-color: #00bc98 !important;
        -webkit-appearance: none;
    }

    & .me-widget-button:hover {
        background-color: #02af8e !important;
    }

    & .me-widget-button:active {
        background-color: #02967a !important;
    }

    @media screen and (min-width: 992px) {
        & .content {
            max-width: 610px !important;
        }

        & .title {
            margin-bottom: 20px;
        }

        & .me-widget-wrap {
            padding-top: 32px;
            padding-bottom: 40px;
            text-align: left;
            box-sizing: content-box;
        }

        & .me-widget-wrap::after {
            right: 30px;
            transform: none;
        }

        & .me-widget-button {
            width: auto;
            padding-left: 16px;
            padding-right: 16px;
        }
    }
`;

export default MEWidget;
