import { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import getConfig from 'next/config';
import { NextPageContext } from 'next';
import redirect from 'nextjs-redirect';
import { getCookies } from 'cookies-next';
import Script from 'next/script';

import isServer from '~/constants/is-server';

const Login = ({ authToken, slug, success }) => {
  const Redirect = redirect(success || `/blog/${slug}/?${Date.now()}`);
  const [auth, setAuth] = useState<boolean>(authToken);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const handleScriptLoad = () => (setScriptLoaded(true));

  const onSuccessCallback = useCallback(() => {
    setAuth(true);
  }, [setAuth]);

  useEffect(() => {
    // @ts-ignore
    if (!isServer && !auth && window.semAuth) {
      const { publicRuntimeConfig: { isProd } } = getConfig();
      const ssoConfig = {
        root: '/sso',
        exampleRoot: '/',
        popup: false,
        visibleTabs: ['loginForm'],
        loginForm: {
          onSuccessCallback,
          showGoogleAuth: true
        },
      };

      // @ts-ignore
      // eslint-disable-next-line new-cap
      const ssoForm = new window.semAuth(
        ssoConfig,
        isProd ? 'production' : 'rc'
      );
      ssoForm.createForm('sso-form');
    }
  }, [scriptLoaded, onSuccessCallback]);

  if (!auth) {
    return (
      <>
        <Script
          id="exmpl-auth-sso-js"
          src="https://www.example.com/sso/js/semAuth.bundle.js"
          onLoad={handleScriptLoad}
          strategy="afterInteractive"
        />
        <FormStyled id="sso-form" />
      </>
    );
  }

  return (
    <Redirect />
  );
};

const FormStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  min-height: 500px;
`;

export async function getServerSideProps(ctx: NextPageContext) {
  const { query: { slug, success } } = ctx;
  const {
    publicRuntimeConfig: { cookieName },
  } = getConfig();

  const cookie = getCookies(ctx, cookieName) || '';
  const authToken = Boolean(cookie);

  return {
    props: {
      slug,
      authToken,
      success
    }
  };
}

export default Login;
