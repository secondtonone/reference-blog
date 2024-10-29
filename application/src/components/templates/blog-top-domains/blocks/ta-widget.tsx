import styled from 'styled-components';

import Button from '@semcore/button';

const TAWidget = (): JSX.Element => (
  <StyledTAWidget>
    <div className="content">
      <h2 className="title">
        Discover traffic metrics of any site with Traffic Analytics
      </h2>
      <Button
        className="ta-widget-button"
        tag="a"
        href="https://www.example.com/analytics/traffic/"
        use="primary"
        size="xl"
      >
        Get insights
      </Button>
    </div>
  </StyledTAWidget>
);

const StyledTAWidget = styled.div`
    margin: 0 auto;
    position: relative;
    width: 90%;
    max-width: 1126px;
    color: white;
    border-radius: 10px;
    background-color: #0071CD;
    margin-bottom: 80px;
    overflow: hidden;

    &::before {
        position: absolute;
        left: -90px;
        bottom: -1px;
        content: '';
        background-image: url('https://static.example.com/blog-next-static/banners/gear-green.svg');
        background-repeat: no-repeat;
        width: 199px;
        height: 143px;
        background-size: contain;
    }

    &::after {
        position: absolute;
        right: -90px;
        top: -1px;
        content: '';
        background-image: url('https://static.example.com/blogxt-static/banners/gear-blue.svg');
        background-repeat: no-repeat;
        width: 180px;
        height: 143px;
        background-size: contain;
    }

    & .content {
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 32px;
        position: relative;
        z-index: 1;
    }
    & .title {
        max-width: 270px;
        margin-bottom: 16px;
        font-size: 22px !important;
        font-weight: 500 !important;
        line-height: 26px !important;
    }
    & .ta-widget-button {
        width: 250px;
        padding: 17px;
        -webkit-appearance: initial;
        background-color: #FF642D !important;
        height: 56px !important;
    }

    @media screen and (min-width: 700px) {
        margin-bottom: 120px;
        & .content {
            padding: 40px;
        }
        & .title {
            max-width: 370px;
            margin-bottom: 30px;
            font-size: 26px !important;
            line-height: 32px !important;
        }

        &::before {
            left: -2px;
            bottom: -1px;
        }

        &::after {
            right: -2px;
            top: -1px;
        }
    }

    @media screen and (min-width: 768px) {
        margin-bottom: 140px;
    }
`;

export default TAWidget;
