import { useEffect, useState } from 'react';

import styled from 'styled-components';

import routerEvents from 'next-router-events';

import { BoxAdaptive, Spinner } from '~/components/atoms';
import { getScheme } from '~/styles/scheme';

const lightTheme = getScheme();

const Progress: React.FC<{ scrolled: number }> = ({ scrolled }) => {
  const [loading, setLoading] = useState<boolean>(false);

  const scrollVisible = scrolled > 0.05;

  useEffect(() => {
    let active = true;

    const dropLoading = () => {
      setLoading(false);
      active = false;
    };

    if (active) {
      routerEvents
        .once('routeChangeStart', () => {
          setLoading(true);
        })
        .on('routeChangeComplete', dropLoading)
        .on('routeChangeError', dropLoading);
    }

    return () => {
      dropLoading();
    };
  }, []);

  if (loading) {
    return (
      <BoxAdaptive
        position="fixed"
        width="100%"
        height="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        backgroundColor="rgba(255,255,255,.25)"
        top={0}
        left={0}
        zIndex={100}
      >
        <Spinner />
      </BoxAdaptive>
    );
  }

  if (scrollVisible) {
    return (
      <LineStyled
        height={{ _: 2, sm: 4 }}
        position="absolute"
        width="100%"
        bottom={0}
        left={0}
        right={0}
        style={{ transform: `scale(${Math.min(scrolled, 1)}, 1)` }}
        data-test={scrolled <= 0.05 ? 'scrolled-start'
          : (scrolled > 0.05 && scrolled <= 0.95 ? 'scrolled-process' : 'scrolled-finish')}
      />
    );
  }

  return null;
};

const LineStyled = styled(BoxAdaptive)<{ scrolled: number }>`
  transform-origin: top left;
  will-change: transform;
  background: linear-gradient(to right, ${lightTheme.orangeIllust}, ${lightTheme.orangeBrand});
`;

export default Progress;
