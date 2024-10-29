import Script from 'next/script';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getCanonicalSubdomain } from '~/utils';

import freeToolsMap from './free-tools-map';
import freeToolsHandlers from './handlers';

export interface FreeToolProps {
  trial?: 'on' | 'off'
  'data-domain'?: string
  'data-theme'?: string
  variant?: 'widget' | 'standalone' | 'mini'
  name: keyof typeof freeToolsMap
  link?: string
}

const FreeTool: React.FC<FreeToolProps> = ({
  trial = 'on',
  variant,
  name = 'site-audit',
  link,
  ...props
}) => {
  const [lang, setLang] = useState<string>('en');
  const {
    pathTo, id, ftname, theme
  } = freeToolsMap[name];
  const handlers = freeToolsHandlers[name];
  const freeToolName = `${ftname}${trial === 'on' ? '-TrialOn' : '-TrialOff'}`;
  const isNotProd = false;
  const Token = {
    PROD: '6LcOkcgUAAAAAPWYIcJBuq-yKALH4ADk2EWBlnTO',
    TEST: '6LcWBMgUAAAAAClB4OFYubp5rZ590hKzXN_N4laQ',
  };

  const FREE_TOOL_RECAPTCHA_TOKEN = Token[isNotProd ? 'TEST' : 'PROD'];

  useEffect(() => {
    if ('location' in window) {
      const canonicalSubdomain = getCanonicalSubdomain(window.location.hostname);
      const validDomain = ['fr', 'es', 'de', 'it', 'pt'].includes(canonicalSubdomain);

      if (validDomain) setLang(canonicalSubdomain);

      if (typeof handlers === 'function') handlers({ link });
    }
  }, []);

  return (
    <Wrapper>
      <Script src={`https://www.google.com/recaptcha/api.js?render=${FREE_TOOL_RECAPTCHA_TOKEN}`} />
      <Script strategy="lazyOnload" src={`https://static.example.com/free-tools/${pathTo}`} />
      <div
        id={id}
        data-trial={trial}
        data-ftname={freeToolName}
        data-recaptcha={FREE_TOOL_RECAPTCHA_TOKEN}
        data-type={variant}
        data-theme={theme}
        data-lang={lang}
        {...props}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  & span[class^="ac_header"],
  & p[class^="sa_app__copyright"] {
    color: ${({ theme }) => (theme.isLight ? theme.opposed : theme.secondary5)} !important;
  }

  & a span {
    border-bottom: 0;
  }
`;

export default FreeTool;
