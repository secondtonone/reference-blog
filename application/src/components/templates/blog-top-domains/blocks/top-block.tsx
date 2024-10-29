import styled from 'styled-components';

import BlockWrap from '~/components/templates/most-visited-websites/blocks/block-wrap';
import usePageContext from '~hooks/use-page-context';

export default function TopBlock(): JSX.Element {
  const {
    page: {
      title, preview, critical: { 'article-content': { content } }, url
    }
  } = usePageContext() || {
    title: '', preview: '', critical: { 'article-content': { content: '' } }, url: ''
  };

  return (
    <StyledBlock isFortune={url === 'blog/fortune-500'}>
      <BlockWrap>
        <div className="wrap">
          <div className="textWrap">
            <h1 className="title">{title}</h1>
            <p className="subtitle">{preview}</p>
            <div className="description" dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        </div>
      </BlockWrap>
    </StyledBlock>
  );
}

const StyledBlock = styled.div<{isFortune: boolean}>`
    & .wrap {
        position: relative;
        min-height: 400px;
        margin-top: 40px;
        padding-bottom: 0;
        margin-bottom: 32px;
    }

    & .wrap::after {
        content: '';
        position: absolute;
        top: -40px;
        right: -120px;
        width: 260px;
        height: 230px;
        background-image: ${({ isFortune }) => (isFortune ? "url('https://static.example.com/blog-next-static/banners/gear-orange.svg')" : "url('https://static.example.com/blog-next-static/banners/gear-blue.svg')")};
        background-repeat: no-repeat;
        background-size: contain;
    }

    & .title {
        font-weight: 700 !important;
        font-size: 32px !important;
        line-height: 36px !important;
    }

    & .subtitle {
        margin-bottom: 20px;
        font-weight: 700 !important;
        font-size: 18px !important;
        line-height: 22px !important;
    }

    & .textWrap {
        position: relative;
        z-index: 1;
    }

    & .description p + p {
      margin-top: 14px;
    }

    & .description p {
      font-size: 14px;
      line-height: 20px;
    }

    @media screen and (min-width: 360px) {
        & .title, & .subtitle {
            width: 100%;
        }
    }

    @media screen and (min-width: 660px) {
        & .wrap {
            margin-bottom: 40px;
        }
        & .wrap::after {
            top: ${({ isFortune }) => (isFortune ? '-20px' : '-40px')};
            right: ${({ isFortune }) => (isFortune ? '-70px' : '-20px')};
            width: 260px;
            height: 230px;
        }
        & .title {
            width: 80%;
            font-weight: 700 !important;
            font-size: 48px !important;
            line-height: 52px !important;
        }

        & .subtitle {
            width: 80%;
            margin-bottom: 20px;
            font-weight: 700 !important;
            font-size: 22px !important;
            line-height: 26px !important;
        }
        & .description p {
            font-size: 16px;
            line-height: 24px;
        }
        & .description p + p {
            margin-top: 16px;
        }
        & .textWrap {
            max-width: 100%;
        }
    }

    @media screen and (min-width: 900px) {
        & .wrap {
            position: relative;
            margin-top: 60px;
            margin-bottom: 40px;
            padding-bottom: 0;
        }
        & .wrap::after {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            width: 305px;
            height: 275px;
            background-image: ${({ isFortune }) => (isFortune ? "url('https://static.example.com/blogxt-static/banners/fortune.svg')" : "url('https://static.example.com/bloblogstatic/banners/statistic.svg')")};
        }
        & .title, & .subtitle {
            width: 100%;
        }

        & .textWrap {
            max-width: 60%;
        }
    }

    @media screen and (min-width: 992px) {
        & .textWrap {
            max-width: 560px;
        }
        & .wrap::after {
            width: 355px;
            height: 326px;
        }
    }
`;
