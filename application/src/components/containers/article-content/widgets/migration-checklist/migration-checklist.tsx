import styled from 'styled-components';
import { useEffect } from 'react';
import { BoxAdaptive } from '~/components/atoms';
import Icon from '~/components/atoms/input-checkbox/icon';
import getScheme from '~/styles/scheme/scheme';
import { useSubdomainContext } from '~/hooks';

const darkTheme = getScheme(true);

const MigrationCheckList = ({ active }) => {
  const { language } = useSubdomainContext();

  useEffect(() => {
    window.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => {
        if (document.documentElement.lang !== language) {
          document.documentElement.lang = language;
        }
      }, 100);
    });
  }, []);

  return (
    <WrapperStyled>
      {active && (
        // @ts-ignore
        <vue-migration-checklist />
      )}
      <script defer src="https://static.example.com/blog-next-static/widgets/migration-checklist-a.js" />
    </WrapperStyled>
  );
};

const WrapperStyled = styled(BoxAdaptive)`
  .sa-m-wrapper {
    .col-left {
      color: ${({ theme }) => (theme.isLight ? 'initial' : '#fff')};
      border-color: ${({ theme }) => theme.secondary3} !important;

      .controls {
        .control-hide {
          width: 75px;
        }
      }
    }

    .feedback .label {
      color: ${({ theme }) => theme.orangeBrand} !important;
      opacity: .8;
      &:hover {
        text-decoration: underline;
        opacity: 1;
      }
    }

    button {
      background: ${({ theme }) => theme.orangeBrand} !important;
      border-color: ${({ theme }) => theme.orangeBrand} !important;
      color: #fff !important;

      &:hover {
        background-color: ${({ theme }) => theme.orangeDark} !important;
        border-color: ${({ theme }) => theme.orangeDark} !important;
      }

      &.button--theme_muted {
        background: ${({ theme }) => theme.secondary3} !important;
        border-color: ${({ theme }) => theme.secondary3} !important;

        &:hover {
          background: ${({ theme }) => theme.black} !important;
          border-color: ${({ theme }) => theme.black} !important;
        }

        span {
          color: inherit;
        }
      }
    }

    .sa-m-wrapper-desktop {
      width: 100%;
      max-width: 100%;

      color: ${({ theme }) => (theme.isLight ? '' : theme.white)};

      > .header {
        background: ${darkTheme.purpleBrand};
        .header__button {
          display: inline-flex;
          align-items: center;
        }

        .header__powerby a {
          color: #fff !important;
          text-decoration: underline !important;
        }

        .button__text {
          padding: 0 8px !important;
        }

        .header__powerby-icon svg {
          fill: #fff !important;
        }
      }
    }

    .content {
      .text {
        color: inherit;
      }
    }

    .difficulty-empty {
      .title {
        color: inherit;
      }
    }

    .popover {
      font-size: 11px !important;
      line-height: 1.5em !important;
      font-weight: ${({ theme }) => theme.fontWeights.normal} !important;
    }

    ul {
      padding-left: 0;
      margin-left: 0;
      li {
        padding-left: 0;
        list-style-type: none !important;

        .migrations-item__icon {
          color: rgb(166, 176, 179) !important;
        }
      }
    }

    .select-list__item {
      margin: 0 !important;
    }

    .select {
      line-height: initial !important;
      color: #757575 !important;
      font-weight: ${({ theme }) => theme.fontWeights.normal} !important;
      .select-button {
        height: 100% !important;
        color: ${({ theme }) => (theme.isLight ? 'initial' : '#333')};
        background-color: #fff;
      }
      .select-button__label, svg {
        color: ${({ theme }) => (theme.isLight ? 'initial' : theme.black)};
      }
      .select-list__item {
        color: #333 !important;
        font-weight: ${({ theme }) => theme.fontWeights.normal} !important;
      }
    }

    .checkbox__control+.checkbox__button {
      position: relative;
      background: transparent !important;
      border-color: darkgrey;

      svg {
        display: none;
      }

      &:after {
        content: '';
        width: 8px;
        height: 6px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        position: absolute;
      }
    }

    .checkbox--size_l .checkbox__control+.checkbox__button:after {
      width: 12px !important;
      height: 10px !important;
    }

    .button--size_xl .button__text {
      font-size: 14px;
    }

    .checkbox__control:checked+.checkbox__button {
      background: ${({ theme }) => theme.success} !important;
      border-color: ${({ theme }) => theme.success} !important;

      &:after {
        background-image: url(${({ theme }) => Icon[theme.name]}) !important;
      }
    }

    .menu-category {
      cursor: default;
    }

    .menu-category,
    .menu-steps,
    .menu-steps__item {
      background: ${({ theme }) => (theme.isDark ? theme.newGrey : '')};
      border-color: ${({ theme }) => theme.secondary3} !important;
      border-radius: 0;
    }

    .menu-steps__item {
      background: ${({ theme }) => (theme.isDark ? theme.black : '')};
    }

    .progress-score {
      background: ${({ theme }) => (theme.isDark ? theme.newGrey : '')} !important;
      border-color: ${({ theme }) => theme.success} !important;
    }

    .popup-close svg {
      color: ${({ theme }) => theme.opposed};

      &:hover {
        color: ${({ theme }) => theme.orangeBrand};
      }
    }

    .menu-category {
      border: 1px solid ${({ theme }) => theme.secondary3} !important;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
    }

    .menu-steps__item {
      margin: 0 !important;
      overflow: hidden;

      &.-selected {
        color: ${({ theme }) => (theme.isLight ? 'initial' : '#fff')};
      }

      &:hover {
        color: ${({ theme }) => (theme.isLight ? 'initial' : '#fff')};
      }

      svg {
        margin-left: 8px;
        color: ${({ theme }) => theme.success};
      }
    }

    .progress-score__bar .progress-score__bar-inner,
    .menu-category .sector {
      background-color: ${({ theme }) => theme.success};
    }
  }
`;

export default MigrationCheckList;
