import styled from 'styled-components';
import { useEffect, useState } from 'react';
import throttle from 'lodash.throttle';
import Tooltip, { Props as TooltipProps } from '../tooltip';

export interface IFieldContainerProps extends TooltipProps {
  error?: React.ReactNode
  field?: () => React.ReactNode
  internal?: boolean,
  scrollTooltip?: boolean,
  showError?: boolean,

  borderless?: boolean
  tooltipDistance?: number
}

const FieldContainer: React.FC<IFieldContainerProps> = ({
  error,
  internal,
  field,
  borderless,
  scrollTooltip,
  showError,
  direction
}) => {
  const hasError = showError && (error !== '');
  const [withError, setWithError] = useState(hasError);

  useEffect(() => {
    let scrollTimeOut;

    const SCROLL_DELAY = 700;

    setWithError(hasError);

    const onScroll = throttle(() => {
      if (scrollTimeOut) {
        clearTimeout(scrollTimeOut);
        setWithError(false);
      }

      scrollTimeOut = setTimeout(() => {
        setWithError(hasError);
        clearTimeout(scrollTimeOut);
      }, SCROLL_DELAY);
    }, SCROLL_DELAY);

    if (scrollTooltip) {
      document.addEventListener('scroll', onScroll);
    }

    return () => {
      if (scrollTooltip) {
        document.removeEventListener('scroll', onScroll);
      }
    };
  }, [hasError]);

  return (
    <Container data-test="field-container" internal={internal} borderless={borderless}>
      <Tooltip
        content={error}
        isOpen={withError}
        isAccent
        direction={direction}
      >
        {field()}
      </Tooltip>
    </Container>
  );
};

const Container = styled.span<{ internal?: boolean, borderless?: boolean}>`
  // critical for tooltips position on bottom 0 for different input types
  display: flex;

  > span {
    display: inline-flex;
    width: 100%;

    [class*='SInput'] {
      margin-bottom: 0 !important;

      [class*='SValue'] {
        padding: 0 24px;

        &::placeholder {
          color: ${({ theme }) => theme.secondary4};
          opacity: .7;
          transition: opacity .3s;

          &:active {
            opacity: 1;
            transition: opacity .3s;
          }
        }
      }
    }
  }
  // critical for tooltips position

  & div[class*="SOutline"],
  & textarea {
    background-color: ${({ theme, internal }) => (internal ? theme.white : 'transparent')} !important;
    
    &:not([class*="invalid"]) {
      border-color: ${({ internal }) => (internal ? 'transparent' : '#D1D4DB')} !important;
      ${({ borderless, theme }) => (borderless ? `
        border-color: transparent !important;
        border-radius: 0 !important;
        border-bottom: 1px solid ${theme.secondary4} !important;
      ` : '')}
    }
  }

  & div[class*="focus"] div[class*="SOutline"] {
    ${({ borderless, theme }) => (borderless ? `
      border-bottom: 1px solid ${theme.isLight ? theme.opposed : theme.white} !important;
      box-shadow: none !important;
    ` : '')}
  }

  & div[class*="invalid"] div[class*="SOutline"],
  & textarea[class*="invalid"] {
    border-color: ${({ theme }) => theme.orangeBrand} !important;
    ${({ borderless, theme }) => (borderless ? `
        border-color: transparent !important;
        border-radius: 0 !important;
        border-bottom: 1px solid ${theme.orangeBrand} !important;
      ` : '')}
  }

  & input,
  & textarea {
    color: ${({ theme, internal }) => (internal ? theme.black : theme.secondary5)} !important;
    font-size: 14px !important;
  }
`;

export default FieldContainer;
